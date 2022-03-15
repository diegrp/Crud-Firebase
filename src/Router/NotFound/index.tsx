import { Head } from "../Head";
import * as C from "./styles";

// NotFound 

export const NotFound = () => {
  return(
    <C.Container>
      <Head title="NotFound" description="Página de error 404"/>
      <C.InfoArea>
          <h1>🧐 Not Found <span style={{color:"red"}}>404</span></h1>
          <p>A página que você procura não existe!</p>
      </C.InfoArea>
    </C.Container>
  )
}