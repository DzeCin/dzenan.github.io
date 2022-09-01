import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";
import {getInTouch} from "./editable-stuff/config";
import GetInTouch from "./components/home/GetInTouch";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>

        <App/>
        <Footer>
            {getInTouch.show && (
                <GetInTouch
                    heading={getInTouch.heading}
                    message={getInTouch.message}
                    email={getInTouch.email}
                />
            )}
        </Footer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
