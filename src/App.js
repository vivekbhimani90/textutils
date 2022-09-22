import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  function toggleStyle() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode successfully Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode successfully Enable", "success");
    }
  }
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleStyle={toggleStyle}
      />
      {/* <About  /> */}
      <Alert alert={alert} />
      <div className="container">
        <TextForm mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
