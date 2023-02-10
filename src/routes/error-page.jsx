import { useRouteError } from "react-router-dom";

import Header from "../components/Header";
import Error404 from "../components/Error404";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <Error404 />
    </>
  );
}
