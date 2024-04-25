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
import Login from "./components/Login/Login";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <>
        <RouterProvider router={appRouter}>
          <Login />
          <Body />
        </RouterProvider>
      </>
    </Provider>
  );
};

export default App;
