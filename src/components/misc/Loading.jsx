import React from "react";
import {Jumbotron} from "../home/migration";
import {mainBody} from "../../editable-stuff/config"

const Loading = (props) => {
    return (
        <Jumbotron
            fluid
            id="home"
            style={{
                background: `linear-gradient(136deg,${mainBody.gradientColors})`,
                backgroundSize: "1200% 1200%",
            }}
            className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
            <div id="stars"/>
        </Jumbotron>
    );
};

export {Loading};
