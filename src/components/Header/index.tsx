import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button/";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import * as C from "./styles";

// Header Component - Logo, filter e nav button

export const Header = () => {

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  
  const [ activeTab, setActiveTab ] = useState("");
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    if(pathname === '/'){
      setActiveTab('home');
    }else if(pathname === '/addcontact'){
      setActiveTab('addcontact');
    }else{
      setActiveTab('');
    }
  },[pathname]);


  const handleSearchForm = (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText to="/" >
          <h1>Crud Firebase</h1>
        </C.HeaderText>
        <C.FormHeader onSubmit={handleSearchForm}>
          <Input
            name="search"
            type="text"
            value={search}
            onChange={({target}) => setSearch(target.value)}
            placeholder="Procurar nome..."
            autoComplete="off"
          />
        </C.FormHeader>
        <C.NavButton>
          <Button
            path="/"
            active={`${activeTab === 'home' ? "activetab":"home"}`}
          >
            Home
          </Button>
          <Button
            path="/addcontact"
            active={`${activeTab === 'addcontact' ? "activetab":"addcontact"}`}
          >
            Adicionar Contato
          </Button>
        </C.NavButton>
      </C.Header>
    </C.Container>
  )
}