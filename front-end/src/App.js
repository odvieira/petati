import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Group from "./pages/Group/Group";
import Activity from "./pages/Activity/Activity";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";


function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} exact />
                    <Route path="/home" element={<Home/>} exact />
                    <Route path="/about" element={<About/>} exact />
                    <Route path='/search' element={<Search/>} exact/>
                    <Route path='/group/:id' element={<Group/>} exact/>
                    <Route path='/activity/:id' element={<Activity/>} exact/>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
