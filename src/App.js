import React from "react";
import Head from "./components/Header/Head";
import Home from "./components/Home/Home";
import Navbar from "./components/Header/Navbar";
import Media from "./components/Media/media";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Home />
      <Media />
      <Footer />
    </>
  );
};

export default App;
