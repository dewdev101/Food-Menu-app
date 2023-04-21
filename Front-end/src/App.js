import React from "react";
import Home from "./page/home";
import CheckBill from "./page/checkBill";
import Faq from "./page/faq";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/checkBill" element={<CheckBill />} />
        <Route  path="/faq" element={<Faq />} />
        <Route  path="*" element={<>404 Not found</>}/>
      </Routes>
    </BrowserRouter>
  </> 
);

export default App;
