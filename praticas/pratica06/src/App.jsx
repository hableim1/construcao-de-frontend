import {useState} from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  const [rota, setRota] = useState("/login");
  const mudaRota = (url) => {
    setRota(url);
  }

  return (
  <>
    {rota == '/login' && <Login navegaPara={mudaRota} />}
    {rota == '/home' && <Home navegaPara={mudaRota} />}
    {rota == '/perfil' && <Perfil navegaPara={mudaRota} />}
  </>
  );
}

export default App;
