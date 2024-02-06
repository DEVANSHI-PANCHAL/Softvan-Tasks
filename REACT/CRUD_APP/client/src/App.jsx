import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Login from "./pages/login";

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
