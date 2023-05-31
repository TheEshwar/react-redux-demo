import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/store";
import IcecreamContainer from "./components/IcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
