import { createBrowserRouter } from "react-router-dom";

import Root from "../routes/root";
import Accomodation from "../routes/accomodation";
import About from "../routes/about";
import ErrorPage from "../routes/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/accomodation/:accomodationId",
    element: <Accomodation />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
