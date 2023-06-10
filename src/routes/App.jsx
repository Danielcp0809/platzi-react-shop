import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import RecoveryPassword from "../containers/RecoveryPassword";
// styles
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
