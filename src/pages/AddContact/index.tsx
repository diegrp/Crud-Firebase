import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Head } from "../../Router/Head";
import { addContact, updateContact, updateToList } from "../../services/firebase";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input, Select } from "../../components/Input";
import { initialState } from "../../data/initialState";
import { State } from "../../types/State";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../types/Data";
import * as C from "./styles";

// Adicionar contato na lista

export const AddContact = () => {
  return(
    <C.Container>
      <Head title={`${id ? "Atualizar Contato":"Adicionar Contato"}`} description="Adicione seu contato na lista"/>
      <C.Info>
        <C.Icon>
          {id ? "✏️":"📝"}
        </C.Icon>
        <C.Description>
          <h1>
            {id ? "Atualizar Contato":"Adicionar Contato"}
          </h1>
            {id ? (
                <p>Preencha o formulário para atualizar o item na lista</p>
            ):(
                <p>Preencha o formulário para adicionar um novo item na lista</p>
            )}
        </C.Description>
      </C.Info>
      <C.FormContainer onSubmit={handleFormSubmit}>
        <Input
          label="Nome:"
          id="nome"
          name="nome"
          type="text"
          value={nome || ""}
          onChange={handleInputChange}
          placeholder="Digite seu nome"
          autoComplete="off"
        />
        <Input
          label="E-mail:"
          id="email"
          name="email"
          type="email"
          value={email || ""}
          onChange={handleInputChange}
          placeholder="Digite seu e-mail"
          autoComplete="off"
        />
        <Input
          label="Telefone:"
          id="telefone"
          name="telefone"
          type="number"
          value={telefone || 0}
          onChange={handleInputChange}
          placeholder="Digite seu telefone"
          autoComplete="off"
        />
        <Select 
          label="Status:" 
          id="status" 
          name="status"
          value={status || ""}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled >Selecione o estado</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </Select>
        <Button
          type="submit"
        >
          {id ? "Atualizar Contato":"Cadastrar Contato"}
        </Button>
      </C.FormContainer>
    </C.Container>
  )
}