import React from "react";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
