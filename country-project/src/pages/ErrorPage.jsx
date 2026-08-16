import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-display text-3xl sm:text-4xl">
        Oops! An error occurred.
      </h1>
      {error && <p className="font-mono text-sm text-muted">{error.data}</p>}
      <NavLink to="/">
        <button className="mt-4 rounded-full bg-brass px-6 py-3 font-semibold text-ink transition-colors duration-200 hover:bg-brass-light">
          {" "}
          Go Home{" "}
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
