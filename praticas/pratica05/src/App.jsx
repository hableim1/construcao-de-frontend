import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
  const index = 1;
  return (
  <>
  {index == 1 && <Login />}
  {index == 2 && <Home />}
  {index == 3 && <Perfil />}

  </>
  );
}

export default App;
