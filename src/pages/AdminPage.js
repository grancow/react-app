import React from "react";
import { Route, Redirect } from "react-router-dom";

const permision = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permision ? (
          <h3>Panel admina - dzień dobry</h3>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminPage;
