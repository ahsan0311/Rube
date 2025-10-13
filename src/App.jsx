import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Outlet } from "react-router-dom";
import CustomCursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <CustomCursor />
    <Navbar/>
    <AppRoutes />
    <Footer/>
    <Outlet />
    </>
  );
};

export default App;
