import * as C from "./styles";

// Header Component - Logo, filter e nav button

export const Header = () => {
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