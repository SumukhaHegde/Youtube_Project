import Header from "./components/Header/Header";
import "./_app.scss";
import Body from "./Screens/HomeScreen/Body";
import appStore from "./Utils/store/appStore";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/BodyContainer/VideoContainer/VideoContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import LeftPane from "./components/BodyContainer/LeftPaneContainer/LeftPane";
import { Container } from "react-bootstrap";

const App = () => {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Body />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <VideoContainer />,
  //       },
  //       {
  //         path: "/watch",
  //         element: <WatchPage />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <Provider store={appStore}>
      <>
        <Header />
        <div className="app-root-container border border-info">
          <LeftPane />
          <Container fluid className="app-container border border-warning">
            <Body />
          </Container>
        </div>
      </>
    </Provider>
  );
};

export default App;
