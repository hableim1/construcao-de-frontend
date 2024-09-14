import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import Secao from "../components/Secao";

function Home() {
    const avisos = ["Ferias 7/9", "Show do Milhao - 11/9"];
    return (
        <>
        <Cabecalho />
        <Conteudo>
            <Menu />
            <Secao texto="Página Inicial">
                <Painel texto="Mural de Avisos" itens={avisos}/>
                <Painel texto="Agenda Academica" itens={[]}/>
                <Painel texto="Historico de Faltas" itens={[]}/>
                <Painel texto="Historico de Notas" itens={[]}/>
            </Secao>
        </Conteudo>
        </>
    );
}

export default Home;