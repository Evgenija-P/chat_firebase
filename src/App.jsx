// import { Routes, Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router";

import { AuthProvider } from "./contexts/AuthContext";
import { Chats } from "./components/Chats";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="font-basic">
      <AuthProvider>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
