import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Layout from "../containers/Layout";
import Login from "../containers/Login";
// styles
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
