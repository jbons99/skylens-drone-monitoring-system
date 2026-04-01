import React, { useState } from "react";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" ? (
        <Login goToRegister={() => setPage("register")} />
      ) : (
        <Register goToLogin={() => setPage("login")} />
      )}
    </>
  );
}

export default App;
