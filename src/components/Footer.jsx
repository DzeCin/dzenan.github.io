import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    const style = {backgroundColor: "#f5f5f5", maxHeight: "11em"};

    return (
        <footer style={style} className="mt-auto py-3 text-center ">
            <Container>
                {props.children}
                <span className="font-monospace"> Made by Dzenan </span>
            </Container>
        </footer>
    );
};

export default Footer;
