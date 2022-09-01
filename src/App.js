import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home"
import Navbar from "./components/Navbar";

import {Blog} from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";

const App = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/blog" exact element={<Blog/>}/>
                <Route path="/blog/:id" element={<BlogPost/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
