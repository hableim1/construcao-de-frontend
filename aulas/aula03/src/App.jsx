import {Titulo} from "./componentes/Titulo";

function Titulo() {
  return (
    <h1>Ola</h1>
  );
}

function App() {
  return (
  <div>
    {console.log("ola")}
  <Titulo />
  <p>Minha aplicação</p>
  </div>
  );
}

export default App
