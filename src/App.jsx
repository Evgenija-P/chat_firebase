// import { Routes, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router";

import { AuthProvider } from "./contexts/AuthContext";
import { Chats } from "./components/Chats";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="font-basic">
      <AuthProvider>
        <Switch>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Login />} />{" "}
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
