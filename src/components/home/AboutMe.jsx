import React from "react";
import {Jumbotron} from "./migration";

new RegExp(
    /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({heading, message, link, imgSize, resume}) => {
    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic] = React.useState(Boolean(link));
    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    React.useEffect(() => {
        setProfilePicUrl(link);
    }, [link]);

    return (
        <Jumbotron id="aboutme" className="m-0" >
            <div className="container row" >
                <div className="col-5 d-none d-lg-block align-self-center" style={{zIndex: 1000 }} >
                    <img
                        className="border border-secondary rounded-circle"
                        src={profilePicUrl}
                        alt="profilepicture"
                        width={imgSize}
                        height={imgSize}
                    />
                </div>
                <div className={`col-lg-${showPic ? "7" : "12"}`}>
                    <h2 className="display-4 mb-5 text-center">{heading}</h2>
                    <p className="lead text-center">{message}</p>
                    {resume && (
                        <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href={resume}
                                target="_blank"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Resume/CV"
                            >
                                Resume
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </Jumbotron>
    );
};

export default AboutMe;
