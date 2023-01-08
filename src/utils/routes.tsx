import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <div>Hello, Dashboard!</div>,
    children: [],
  },
]);

export { router }
