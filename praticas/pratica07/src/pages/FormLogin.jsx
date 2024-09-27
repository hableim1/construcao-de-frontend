import {useState} from "react";
import {useNavigate} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    return (
      <form>
        <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
        <InputSenha valor={senha} mudaValor={(e) => setSenha(e.target.value)} />
        <Botao texto="Entrar" aoClicar={(e) => navigate("/home")} />
      </form>
    );
  }

export default FormLogin;