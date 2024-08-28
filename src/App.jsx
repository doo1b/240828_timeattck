import "./App.css";
import Router from "./pages/Router";
import store from "./redux/configStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
