import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home"
import Navbar from "./components/Navbar";
import {configurationIdentityServer} from "./auth/config.js"
import {Blog} from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import {OidcProvider} from "@axa-fr/react-oidc";
import {Loading} from "./components/misc/Loading";
import Editor from "./components/blog/Editor";


const App = () => {
    return (

        <BrowserRouter basename={"/"}>
            <OidcProvider configuration={configurationIdentityServer} loadingComponent={Loading}>
                <Navbar/>

                <Routes>

                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/blog" exact element={<Blog/>}/>
                    <Route path="/blog/:id" element={<BlogPost/>}/>
                    <Route path="/editor" element={<Editor/>}/>

                </Routes>
            </OidcProvider>
        </BrowserRouter>


    );
};

export default App;
