import { Routes, Route } from "react-router-dom";

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import { Login } from "./components/Login";

function App() {
  return (
    <div className="font-basic">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
