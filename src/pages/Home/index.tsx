import { ChangeEvent, useEffect, useState } from "react";
import { Head } from "../../Router/Head";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { Select } from "../../components/Input";
import { Data } from "../../types/Data";
import { deleteContact, filterContact, listContact, resetListContact, sortContact } from "../../services/firebase";
import * as C from "./styles";

// Lista de Contatos e Filtragem de dados

export const Home = () => {

  const [ data, setData ] = useState<Data>({});
  const [ sortedData, setSortedData ] = useState<any[]>([]);
  const [ sort, setSort ] = useState(false);

  useEffect(() => {
    listContact(setData);

    return () => {
      setData({});
    }
  },[]);

  const onDelete = ( id: string ) => {
    deleteContact(id, toast);
  }

  const handleSelectChange = ( e: ChangeEvent <HTMLInputElement | HTMLSelectElement> ) => {
    const { value } = e.target;
    setSort(true);
    sortContact(value, setSortedData);
  }

  const handleResetClick = () => {
    setSort(false);
    resetListContact(setData);
  }

  const filterData = ( value: string ) => {
    filterContact(value, setData);
  }
  
  return(
    <C.Container>
      <Head title="Lista de Contatos" description="Gerencie seus dados cadastrais"/>
      <C.Table>
        <thead>
          <tr>
            <C.TableHeadColumn>No.</C.TableHeadColumn> 
            <C.TableHeadColumn>Nome</C.TableHeadColumn> 
            <C.TableHeadColumn>E-mail</C.TableHeadColumn> 
            <C.TableHeadColumn>Telefone</C.TableHeadColumn> 
            <C.TableHeadColumn>Status</C.TableHeadColumn> 
            {!sort && <C.TableHeadColumn>Ações</C.TableHeadColumn>} 
          </tr>
        </thead>
        {!sort && (
          <tbody>
              {Object.keys(data).map((id, index) => {
                return(
                  <C.TableLine key={id}>
                    <th scope="row">{index + 1}</th>
                    <C.TableColumn>{data[id].nome}</C.TableColumn>
                    <C.TableColumn>{data[id].email}</C.TableColumn>
                    <C.TableColumn>{data[id].telefone}</C.TableColumn>
                    <C.TableColumn style={{color: data[id].status !== "Ativo" ? "red":"green"}}>{data[id].status}</C.TableColumn>
                    <C.TableColumn>
                      <C.Actions>
                        <Button
                          active="update"
                          path={`/update/${id}`}
                        >
                          Atualizar
                        </Button>
                        <Button
                          onClick={() => onDelete(id)}
                          active="delete"
                          path=""
                        >
                          Deletar
                        </Button>
                        <Button
                          active="view"
                          path={`/view/${id}`}
                        >
                          Visualizar
                        </Button>
                      </C.Actions>
                    </C.TableColumn>
                  </C.TableLine>
                )
              })}
          </tbody>
        )}
        {sort && (
          <tbody>
            {sortedData.map(( item, index ) => {
              return(
                <C.TableLine key={index}>
                  <th scope="row">{index + 1}</th>
                  <C.TableColumn>{item.nome}</C.TableColumn>
                  <C.TableColumn>{item.email}</C.TableColumn>
                  <C.TableColumn>{item.telefone}</C.TableColumn>
                  <C.TableColumn style={{color: item.status !== "Ativo" ? "red":"green"}} >{item.status}</C.TableColumn>
                </C.TableLine>
              )
            })}
          </tbody>
        )}
      </C.Table>
      <C.SortedData>
        <h2>Filtragem</h2>
        <p>Escolha a forma que deseja filtrar os contatos na lista</p>
        <C.SelectWrapper>
          <Select 
            label="Sortear" 
            id="sort" 
            name="sort" 
            onChange={handleSelectChange}
            required
          >
            <option value="" disabled >Selecione</option>
            <option value="nome">Nome</option>
            <option value="email">E-mail</option>
            <option value="telefone">Telefone</option>
            <option value="status">Status</option>
          </Select>
            <Button
              active="reset"
              onClick={handleResetClick}
              path=""
            >
              Resetar
            </Button>
        </C.SelectWrapper>
          <C.StatusWrapper>
            <label>Status</label>
              <Button
                active="active"
                onClick={() => filterData("Ativo")}
                path=""
               >
                Ativo
              </Button>
              <Button
                active="inactive"
                onClick={() => filterData("Inativo")}
                path=""
              >
                Inativo
              </Button>
          </C.StatusWrapper>
      </C.SortedData>
    </C.Container>
  )
}