function Link(props) {
    const trataClique = (e) => {
        e.preventDefault();
          props.navegaPara(e.target.getAttribute("href"));
      }
      
    return (
        <a href={props.rota} onClick={trataClique}>{props.texto}</a>
    );
  }

export default Link;