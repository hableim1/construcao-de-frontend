import InputPesquisar from "./InputPesquisar";
import Logo from "./Logo";
import Titulo from "./Titulo";

function Cabecalho(p) {
    return (
        <header>
            <Logo imagem="" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online" />
            <InputPesquisar />
            <Logo imagem="" texto="Icone Pesquisar" />
        </header>
    );
}

export default Cabecalho;