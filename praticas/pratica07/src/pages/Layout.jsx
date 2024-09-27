import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Conteudo from "../components/Conteudo";
import Cabecalho from "../components/Cabecalho";

function Layout() {
    return (
        <>
        <Cabecalho />
        <Conteudo>
            <Menu />
            <Outlet />
        </Conteudo>
        </>
    );
}

export default Layout;