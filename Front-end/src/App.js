import React from "react";
import  Home  from "./page/home";
import Table from "./page/table";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";


const App = () => (
  <>
 <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Table" element={<Table />} />
      <Route exact path="*" element={<>404 Not found</>}></Route>
    </Routes>
  </BrowserRouter>
  </>
);

export default App;

