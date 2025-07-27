import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h2>Oops! something went wrong</h2>
      <p>
        {err?.status || "Unknown Error"} -{" "}
        {err?.statusText || "Unexpected Error"}
      </p>
    </div>
  );
};

export default Error;
