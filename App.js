import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeToggleMode = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  };
  const toggleMode = (cls) => {
    removeToggleMode();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f124f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(()=>{
      //     document.title = 'Text-Utlis is very amazing tool'
      // },2000)
      // setInterval(()=>{
      //     document.title = 'Download text-Utils'
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  // setMode("dark")
  return (
    <>
      <Alert alert={alert} />
  
      <div className="container my-3">
      <Navbar
        title="Provider"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        >
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}
</Navbar>
<TextForm
              showAlert={showAlert}
              heading="Enter a text to analyze"
              mode={mode}
            />
            {/* <About/> */}
      {/* <Router>
      <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/' element={ <TextForm
              showAlert={showAlert}
              heading="Enter a text to analyze"
              mode={mode}
            />} />
    
      </Routes>
      </Router> */}
        </div>
    
    </>
  );
}

export default App;
