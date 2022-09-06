import React from "react";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";


const CertificationCard = ({value}) => {
    let mdSize;

    if (Object.keys(value).length > 4) {
        mdSize = 3
        console.log(mdSize)
    } else {
        mdSize = 12 / Object.keys(value).length
    }

    return (

        <Col md={mdSize}>

            <a style={{color: "inherit", textDecoration: "inherit"}} href={value.link ? value.link : "#"}>
                <Card className="card shadow-lg p-5 mb-1 bg-white rounded">
                    <Card.Img variant="bottom" src={value.logo}/>
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                    </Card.Body>
                </Card>
            </a>

        </Col>
    );
};

export default CertificationCard;
