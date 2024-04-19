import Header from "./components/Header/Header";
import "./index.scss";
import Body from "./components/BodyContainer/Body";
import appStore from "./Utils/store/appStore";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/BodyContainer/VideoContainer/VideoContainer";
import WatchPage from "./components/WatchPage/WatchPage";

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
  ]);

  return (
    <Provider store={appStore}>
      <div className="app-root">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
