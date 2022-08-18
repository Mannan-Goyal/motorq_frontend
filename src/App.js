import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddUpdate from './pages/Admin/Add_Update';
import Admin from './pages/Admin/Admin';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin/add" element={<AddUpdate/>}/>
        </Routes>
    </Router>
  );
}

export default App;
