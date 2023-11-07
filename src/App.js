import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alerts from "./component/Alerts";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="CASTER" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Try CASTER -  Case and Space Text Enhancement & Reader"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
