import { useSelector } from "react-redux";
import "./App.css";
import { Auth } from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";

function App() {
  const user = useSelector((state) => state.auth.authData);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="/home" /> : <Auth />}
          />
          <Route
            path="/Profile"
            element={user ?<Profile /> :  <Auth />}
          />
          <Route
            path="/chat"
            element={user ?<Chat /> :  <Auth />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
