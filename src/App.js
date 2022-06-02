import React from 'react';
import {
  Route, Routes, BrowserRouter
} from 'react-router-dom';
import "./App.css";
import ExcelView from "./view/ExcelView";
import Homepage from "./view/Homepage";
import Topsis from "./view/Topsis";



export default function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/excel-topsis"  element={<ExcelView />} />

          <Route path="/topsis"  element={<Topsis />} />

          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

