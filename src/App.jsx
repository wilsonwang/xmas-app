import React, { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    // fetch("http://localhost:4000/Slides")
    fetch("https://amethyst-merciful-top.glitch.me/slides/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ data }}>
        <Header />
        <Hero />
      </AppContext.Provider>
    </>
  );
}

export default App;
