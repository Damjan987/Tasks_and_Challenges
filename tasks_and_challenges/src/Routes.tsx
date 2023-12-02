import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BoxListTask from "./pages/BoxListTask";
import CirclesTask from "./pages/CirclesTask";
import SelectCountriesTask from "./pages/SelectCountriesTask";
import PokedexTask from "./pages/PokedexTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/boxListTask", element: <BoxListTask /> },
      { path: "/circlesTask", element: <CirclesTask /> },
      { path: "/selectCountriesTask", element: <SelectCountriesTask /> },
      { path: "/PokedexTask", element: <PokedexTask /> },
    ],
  },
]);
