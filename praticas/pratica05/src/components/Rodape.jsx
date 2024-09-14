import "./Rodape.css";

function Rodape(props) {
    return (
        <footer><p>
            {props.texto}
        </p></footer>
    );
  }

export default Rodape;