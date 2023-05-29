import { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import Footer from "./components/Footer";
import Nav from "./components/Navigation";
import Loader from "./components/Loader";

import "./styles/App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const url = import.meta.env.VITE_BACKEND_URL;
  const key = import.meta.env.VITE_BACKEND_KEY;

  const loadInfo = async (user = "wearymench") => {
    try {
      const response = await axios.get(`${url}/${user}`, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      const data = response.data;
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("Error while loading info:", error);
    }
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <>
      <Nav />
      {userData ? <Home userData={userData} loadInfo={loadInfo} /> : <Loader />}
      <Footer />
    </>
  );
}

export default App;
