function Botao(props) {
    return (
     <button onClick={props.aoClicar}>{props.texto}</button>
    );
  }
  
  export default Botao;