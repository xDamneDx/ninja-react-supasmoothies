import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout:
import Main from "./layouts/Main";

// Pages:
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: ":id", element: <Update /> },
    ],
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
