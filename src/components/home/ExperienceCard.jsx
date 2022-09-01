import React from 'react';
import {
    Col,
} from "react-bootstrap";

const ExperienceCard = ({data}) => {
    return (
        <Col lg="6">

            <div className="pb-5 text-center">
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    <br/>
                    <i className={`fa fa-sharp fa-solid fa-location-pin`}/>
                    <br/>
                    <i>{data.country}</i>
                </p>


            </div>
        </Col>
    );
}

export default ExperienceCard;
