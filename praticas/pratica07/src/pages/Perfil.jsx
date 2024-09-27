import {useParams} from "react-router-dom";
import Secao from "../components/Secao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function Perfil() {
    return (
        <>
        {id == 1 ? 
     <Secao texto="Perfil do Usuário">
       <InputEmail valor="aluno@email.com" mudaValor={()=>{}} />
       <InputSenha valor="" mudaValor={()=>{}} />
       <Botao texto="Salvar" />
     </Secao>
     : <p>Usuário não encontrado</p> }

        </>
    );
}

export default Perfil;