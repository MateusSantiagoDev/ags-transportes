import "./index.css";
import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Inicio } from "./Pages/inicio/inicio";
import { SobreNos } from "./Pages/sobreNos/sobreNos";
import { Servicos } from "./Pages/servicos/servicos";
import { Form } from "./Pages/forms/form";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobre-nos" element={<SobreNos/>}/>
            <Route path="/servicos" element={<Servicos/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>       
        <Footer/>
        </BrowserRouter>
    </React.StrictMode>
)