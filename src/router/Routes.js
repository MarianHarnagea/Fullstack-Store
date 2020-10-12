import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...rest }) => {
  const isAuthentificated = useSelector(({ auth }) => auth.isAuthentificated);
  const role = useSelector(({ auth }) => auth.role);

  return (
    <Route
      {...rest}
      render={() => {
        if (!isAuthentificated && role !== "admin") {
          return <Redirect to="/" />;
        }

        return children;
      }}
    />
  );
};

export const NonPrivateRoute = ({ children, ...rest }) => {
  const isAuthentificated = useSelector(({ auth }) => auth.isAuthentificated);

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthentificated) {
          return <Redirect to="/" />;
        }

        return children;
      }}
    />
  );
};
