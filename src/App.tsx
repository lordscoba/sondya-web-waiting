import { createBrowserRouter } from "react-router-dom";
import { Description, ErrorPage, Home } from "./screens";

// import ErrorPage from "./error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/description",
    element: <Description />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
