import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
import Signup from "./features/auth/Signup";
import Dashboard from "./features/PageLayout/PageLayout";
import StudentsPage from "./components/StudentsPage";
import PageLayout from "./features/PageLayout/PageLayout";
// Import LogoutPage if needed

function App() {
  return (
    <Routes>
      <Route path="/layout" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        
        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          {/* <Route path="userslist" element={<UsersList />} /> */}
          {/* <Route path="logout" element={<LogoutPage />} /> */}
          
          {/* Nested PageLayout routes */}
          <Route path="pageLayout" element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="students" element={<StudentsPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
    // <Layout/>
    // <PageLayout/>
  );
}

export default App;
