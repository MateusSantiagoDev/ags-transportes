import "./index.css";
import React from "react";
import  ReactDOM  from "react-dom/client";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Inicio } from "./Pages/inicio/inicio";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header/>
        <Inicio/>
        <Footer/>
    </React.StrictMode>
)