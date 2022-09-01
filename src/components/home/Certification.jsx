import {Jumbotron} from "./migration";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CertificationCard from "./CertificationCard";

const Certification = ({heading, certs}) => {
    return (
        <Jumbotron fluid id="certifications" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row className="">
                    {certs.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            value={cert}
                        />
                    ))}
                </Row>
            </Container>

        </Jumbotron>


        // <Jumbotron fluid id="projects" className="bg-light m-0">
        //     <Container className="">
        //         <h2 className="display-4 pb-5 text-center">{heading}</h2>
        //         {/*<Row>*/}
        //             {/*{certs.map((cert) => (*/}
        //                 <div data-iframe-width="150" data-iframe-height="270"
        //                 data-share-badge-id="6803de05-47bf-4ff8-bcf9-6f916a2026cc"
        //                 data-share-badge-host="https://www.credly.com"></div>
        //                 {/*))}*/}
        //             <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        //         {/*</Row>*/}
        //     </Container>
        // </Jumbotron>
    )
};

export default Certification;
