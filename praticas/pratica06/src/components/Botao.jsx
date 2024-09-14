function Botao(props) {
    return (
        <button onClick={(e) => props.navegaPara("/home")}>{props.texto}</button>
    );
  }

export default Botao;