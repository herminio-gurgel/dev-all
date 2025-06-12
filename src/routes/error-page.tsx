import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{ height: "100vh" }}
      className="is-display-flex is-flex-direction-column is-align-items-center is-justify-content-center"
    >
      <h1 className="is-size-1 has-text-weight-extrabold mb-6">Opa!</h1>
      <p className=" is-size-5 mb-4">Desculpe, um erro inesperado ocorreu.</p>
      <p className="has-text-weight-light">
        <i>
          {(() => {
            if (typeof error === "object" && error !== null) {
              const err = error as { statusText?: string; message?: string };
              return err.statusText ?? err.message;
            }
            return String(error);
          })()}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
