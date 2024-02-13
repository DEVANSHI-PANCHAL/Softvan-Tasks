import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageLayout from "./pages/AdminPanel";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} />   */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="admin" exact={true} element={<PageLayout />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
