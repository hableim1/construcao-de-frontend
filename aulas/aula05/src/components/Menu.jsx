import Link from "./Link";

function Menu(props) {
    const opcoes = [
        {texto: "Home", rota: "/home"},
        {texto: "Perfil", rota: "/perfil"},
        {texto: "Sair", rota: "/login"},
    ];

    return (
        <nav>
            <ul>
                {opcoes.map((opcao,index) => (
                <li key={index}>
                    <Link navegaPara={props.navegaPara} rota={opcao.rota} texto={opcao.texto} />
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;