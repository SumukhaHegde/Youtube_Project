import Header from "./components/Header/Header";
import "./index.scss";
import Body from "./components/BodyContainer/Body";
import appStore from "./Utils/store/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app-root">
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
