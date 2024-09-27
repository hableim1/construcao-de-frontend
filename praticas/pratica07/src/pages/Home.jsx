import Painel from "../components/Painel";
import Secao from "../components/Secao";

function Home() {
    return (
    <Secao texto="Página Inicial">
<div>
    <Painel texto="Mural de Avisos" itens={["Inscrições para Cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]} />
    <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"]} />
    <Painel texto="Histórico de Notas" itens={["Lógica de Programação - 5,5", "Banco de Dados - 7,8", "Engenharia de Software - 5,3"]} />
    <Painel texto="Histórico de Faltas" itens={["Lógica de Programação - 4", "Banco de Dados - 0", "Engenharia de Software - 1"]} />
</div>
    </Secao>

    );
}

export default Home;