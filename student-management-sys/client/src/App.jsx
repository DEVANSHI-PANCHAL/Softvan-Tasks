import React, { Suspense, lazy } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import withToast from "./components/WithToast"; 
import ErrorBoundary from './pages/ErrorBoundary';
import FallbackPage from './pages/FallbackPage';
const Dashboard = lazy(() => import('./pages/Dashboard'));

function ErrorPage() {
  return <FallbackPage />;
}
function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={
            <Suspense fallback={<FallbackPage/>}>
              <Dashboard />
            </Suspense>
          }>
            <Route path="/dashboard/*" element={<ErrorPage />} />
          </Route>
        </Route>
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Suspense fallback={<FallbackPage/>}></Suspense>

    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default withToast(App); // Wrap your App component with the withToast HOC
