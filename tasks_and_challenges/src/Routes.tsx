import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BoxListTask from "./pages/BoxListTask";
import CirclesTask from "./pages/CirclesTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/boxListTask", element: <BoxListTask /> },
      { path: "/circlesTask", element: <CirclesTask /> },
    ],
  },
]);
