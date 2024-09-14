import Link from "./Link";
import "./Menu.css";

function Menu(props) {
    const opcoes = [
        {texto: "Home", rota: "/home"},
        {texto: "Perfil", rota: "/perfil"},
        {texto: "Sair", rota: "/login"},
    ];
    return (
     <nav><ul>
        {opcoes.map((opcao, index) => 
        <li key={index}>
            <Link texto={opcao}/>
        </li>)}
        </ul></nav>
    );
  }

export default Menu;