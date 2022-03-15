import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas do CRUD

import { Home } from "../pages/Home";
import { AddContact } from "../pages/AddContact";
import { View } from "../pages/View";
import { Search } from "../pages/Search"; 

// Head e Toast

import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AppRouter = () => {
  return(
    <Router>
      <ToastContainer position="top-center"/>
      <Header/>
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