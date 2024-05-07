import "./_app.scss";
import Body from "./Screens/HomeScreen/Body";
import appStore from "./Utils/store/appStore";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/BodyContainer/VideoContainer/VideoContainer";
import Login from "./components/Login/Login";
import WatchScreen from "./components/WatchScreen/WatchScreen";

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
          path: "/watch/:key",
          element: <WatchScreen />,
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
