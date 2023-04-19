import React from "react";
import Home from "./page/home";
import CheckBill from "./page/checkBill";
import Faq from "./page/faq";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkBill" element={<CheckBill />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="*" element={<>404 Not found</>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
