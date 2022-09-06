import React from "react";
import MainBody from "./MainBody";
import {about, certifications, experiences, mainBody, repos, skills} from "../../editable-stuff/config";
import AboutMe from "./AboutMe";
import Certifications from "./Certification";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";

const Home = (props) => {

    let styles = {
        main: {
            minHeight: 'calc(100vh - 5.5em) !important'
        }
    }

    return (

        <div className="main" style={styles.main}>
            <>
                <MainBody
                    gradient={mainBody.gradientColors}
                    title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                    message={mainBody.message}
                    icons={mainBody.icons}
                />
                {about.show && (
                    <AboutMe
                        heading={about.heading}
                        message={about.message}
                        link={about.imageLink}
                        imgSize={about.imageSize}
                        resume={about.resume}
                    />
                )}
                {certifications.show && (
                    <Certifications
                        heading={certifications.heading}
                        certs={certifications.certs}
                    />
                )}
                {experiences.show && (
                    <Experience experiences={experiences}/>
                )
                }
                {repos.show && (
                    <Project
                        heading={repos.heading}
                        username={repos.gitHubUsername}
                        length={repos.reposLength}
                        specfic={repos.specificRepos}
                    />
                )}
                {skills.show && (
                    <Skills
                        heading={skills.heading}
                        hardSkills={skills.hardSkills}
                        softSkills={skills.softSkills}
                    />
                )}

            </>
        </div>
    );
};

export default Home;
