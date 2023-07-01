import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmail from "../pages/SendEmail"
import NewPassword from "../pages/NewPassword"
import MyAccount from "../pages/MyAccount"
import CreateAccount from "../pages/CreateAccount"
import Checkout from "../pages/Checkout"
import Orders from "../pages/Orders"
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
// styles
import "../styles/global.scss";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>      
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<RecoveryPassword />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/sign-up" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
