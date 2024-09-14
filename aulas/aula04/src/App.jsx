import Login from './pages/Login';
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  const index = 3;

  return (
    <>
    {index==1 && <Login />}
    {index==2 && <Home />}
    {index==3 && <Perfil />}
    </>
  );
}

export default App;