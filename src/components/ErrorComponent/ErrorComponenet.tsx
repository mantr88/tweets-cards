import { useRouteError } from "react-router-dom";

function ErrorComponenet() {
  const error: unknown = useRouteError();

  return (
    <div>
      <h2>We caught error 😱!</h2>
      <p>{(error as Error).message}</p>
    </div>
  );
}

export default ErrorComponenet;
