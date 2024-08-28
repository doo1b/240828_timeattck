import "./App.css";
import { PokemonProvider } from "./context/PokemonContext";
import Router from "./pages/Router";

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
