import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    const Style = {backgroundColor: "#f5f5f5"};

    return (
        <footer style={Style} className="mt-auto py-3 text-center ">
            <Container>
                {props.children}
                <span className="font-monospace"> Made by Dzenan </span> <a href="https://github.com/DzeCin" className="fab fa-github"/>
            </Container>
        </footer>
    );
};

export default Footer;
