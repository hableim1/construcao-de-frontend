import { useState} from "react";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const efetuaLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home");
        // chamada ao backend
    }

    return (
        <form onSubmit={efetuaLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;