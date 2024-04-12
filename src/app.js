import Header from "./components/Header/Header";
import "./index.scss";
import Body from "./components/BodyContainer/Body";

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <Body />
    </div>
  );
};

export default App;
