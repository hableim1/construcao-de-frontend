import Conteudo from "../components/Conteudo";
import FormLogin from "./FormLogin";
import Rodape from "../components/Rodape";

function Login() {
    return (
        <>
        <Conteudo>
            <img src="https://www.svgrepo.com/show/411955/learn.svg" alt="Logo da Aplicação" />    
            <h1>Aluno Online</h1>
            <FormLogin />
        </Conteudo>
        <Rodape />

        </>
    );
}

export default Login;