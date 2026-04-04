<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Upload from "./pages/Upload.jsx";
import History from "./pages/History.jsx";
import NotFound from "./pages/NotFound.jsx";
=======
import React, { useState } from "react";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
>>>>>>> origin/Parth--Branch

function App() {
  const [page, setPage] = useState("login");

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
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
>>>>>>> origin/Parth--Branch
