import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../components/Button";
import { Data } from "../../types/Data";
import { searchContact } from "../../services/firebase";
import { Head } from "../../Router/Head";
import * as C from "./styles";

// Procurar contato na lista

export const Search = () => {
  return(
    <>
      <Head title="Procurar Contato" description="procure o contato na lista" />
      {Object.keys(data).length === 0 ? (
        <C.Info>
          <C.Title>
            Não foi possível encontrar na lista, algum contato com esse nome: 
            <span>{usersearch}</span>
          </C.Title>
          <C.Description>
            <Button path="/" active="view">Voltar</Button>
          </C.Description>
        </C.Info>
      ):(
        <C.Table>
          <thead>
            <tr>
              <C.TableHeadColumn>No.</C.TableHeadColumn> 
              <C.TableHeadColumn>Nome</C.TableHeadColumn> 
              <C.TableHeadColumn>E-mail</C.TableHeadColumn> 
              <C.TableHeadColumn>Telefone</C.TableHeadColumn> 
              <C.TableHeadColumn>Status</C.TableHeadColumn> 
            </tr>
          </thead>
          <tbody>
              {Object.keys(data).map((id, index) => {
                return(
                  <C.TableLine key={id}>
                    <th scope="row">{index + 1}</th>
                    <C.TableColumn>{data[id].nome}</C.TableColumn>
                    <C.TableColumn>{data[id].email}</C.TableColumn>
                    <C.TableColumn>{data[id].telefone}</C.TableColumn>
                    <C.TableColumn style={{color: data[id].status !== "Ativo" ? "red":"green"}}>{data[id].status}</C.TableColumn>
                  </C.TableLine>
                )
              })}
          </tbody>
        </C.Table>
      )}
    </>
  )
}