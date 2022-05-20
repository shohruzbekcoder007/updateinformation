import React, { useState } from "react";
import Login from './components/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import MyGrid from "./components/MyGrid";

function App() {
  const [user, setUser] = useState(null)
  return (
    <Routes>
        {sessionStorage.getItem('access_token') && <Route path="/" element={<MyGrid/>} />}
        <Route path="/login" element={<Login useFunction={setUser}/>} />
        <Route path="/*" element={<Navigate to={user?"/":"login"}/>} />
    </Routes>
  );
}

export default App;
