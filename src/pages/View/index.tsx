import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/User";
import { viewDetailContact } from "../../services/firebase";
import { Head } from "../../Router/Head";
import * as C from "./styles";

// Visualizar dados do usuário

export const View = () => {

  const [ user, setUser ] = useState<User>({});

  const { id } = useParams();

  useEffect(() => {
    viewDetailContact(setUser, id);
  },[id]);
  
  return(
    <C.Container>
      <Head title="Detalhes do Usuário" description="Dados cadastrais do contato na lista"/>
      <C.Info>
        <C.Title>
            <h1>Detalhes do Usuário</h1>
            <p>Lista de seus dados cadastrais</p>
        </C.Title>
        <C.Description>
            <div>
              <strong>Id: </strong>
              <span>{id}</span>
            </div>
            <div>
              <strong>Nome: </strong>
              <span>{user.nome}</span>
            </div>
            <div>
              <strong>E-mail: </strong>
              <span>{user.email}</span>
            </div>
            <div>
              <strong>Telefone: </strong>
              <span>{user.telefone}</span>
            </div>
            <div>
              <strong>Status: </strong>
              <span style={{color: user.status !== "Ativo" ? "red":"green"}}>{user.status}</span>
            </div>
        </C.Description>
      </C.Info>
    </C.Container>
  )
}