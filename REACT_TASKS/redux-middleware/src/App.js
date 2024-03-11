import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { UserList } from "./features/users/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<h1>Add user</h1>} />
          <Route path="/edit-user" element={<h1>Edit user</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
