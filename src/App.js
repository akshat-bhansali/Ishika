import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast notifications
import ValentineComponent from "./Comp1";
import ValentineComponent2 from "./Comp2";

const App = () => {
  return (
    <>
    <ValentineComponent/>
    {/* <ValentineComponent2/> */}
    </>
  );
};

export default App;