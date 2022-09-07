import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {OidcUserStatus, useOidc, useOidcUser} from "@axa-fr/react-oidc";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {mainBody, about} from "../editable-stuff/config.js";

const Navigation = () => {

    const [scrollAtTop, setScrollAtTop] = useState(true)
    const {oidcUserLoadingState} = useOidcUser();
    const {login, logout} = useOidc();

    window.addEventListener('scroll', () => {
        if (window.scrollY !== 0) {
            setScrollAtTop(false)
        }
        if (window.scrollY === 0) {
            setScrollAtTop(true)
        }
    });


    return (
        <Navbar
            className={`px-3 fixed-top  ${!scrollAtTop ? "navbar-white" : "navbar-transparent"}`}
            expand="lg"
        >
            <Navbar.Brand className="navbar-brand" href={"/#home"}>
                {`${mainBody.firstName}`}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    {process.env.REACT_APP_ENABLE_BLOG === "TRUE" ?
                        <Nav.Link as={NavLink} to="/blog">
                            Blog
                        </Nav.Link>
                        :
                        ""}
                    <Nav.Link href="/#projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link href={about.resume}>
                        Resume
                    </Nav.Link>
                    <Nav.Link href="/#aboutme">
                        About me
                    </Nav.Link>
                    {oidcUserLoadingState === OidcUserStatus.Unauthenticated &&
                        <Nav.Link onClick={() => login('/')}>
                            Login
                        </Nav.Link>
                    }
                    {oidcUserLoadingState === OidcUserStatus.Loading &&
                        <Nav.Link>
                            Loading user data
                        </Nav.Link>
                    }

                    {oidcUserLoadingState === OidcUserStatus.Loaded &&
                        <Nav.Link onClick={() => logout('/')}>
                            Logout

                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
