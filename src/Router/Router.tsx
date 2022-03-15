import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas do CRUD

import { Home } from "../pages/Home";
import { AddContact } from "../pages/AddContact";
import { View } from "../pages/View";
import { Search } from "../pages/Search"; 

export const AppRouter = () => {
  return(
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addcontact" element={<AddContact/>}/>
          <Route path="/update/:id" element={<AddContact/>}/>
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  )
}