import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Titulo from "../components/Titulo";

function Perfil(props) {
    return (
    <Conteudo>
        <Titulo texto="Perfil do Usuário" />
        <Menu navegaPara={props.navegaPara}/>

    </Conteudo>
    );
  }

export default Perfil;