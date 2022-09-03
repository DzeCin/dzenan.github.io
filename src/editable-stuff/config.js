// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#141E30, #243B55, #004e92",
    firstName: "Dzenan",
    middleName: "",
    lastName: "Cindrak",
    message: " Passionate about changing the world with technology. ",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/DzeCin",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/dzenan-cindrak/",
        },

    ],
};

// Certifications SECTION

const certifications = {
    show: true,
    heading: "Certifications",
    certs: [
        {
            name: "CKS: Certified Kubernetes Security Specialist",
            logo: "https://images.credly.com/size/680x680/images/9945dfcb-1cca-4529-85e6-db1be3782210/kubernetes-security-specialist-logo2.png",
            link: "https://www.credly.com/badges/6803de05-47bf-4ff8-bcf9-6f916a2026cc/embedded"
        },
        {
            name: "CKA: Certified Kubernetes Administrator",
            logo: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
            link: "https://www.credly.com/badges/341ca84c-a060-47cd-9dfd-49b037ed9fbf/embedded"
        },
        {
            name: "Microsoft Certified: Azure Administrator Associate",
            logo: "https://images.credly.com/size/680x680/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
            link: "https://www.credly.com/earner/earned/badge/9219f300-40a9-4a33-aa47-6a7d1e36ca37/embedded"
        },

    ]

};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the imaLink either with:
//a) a link to an hosted image
//      i.e: imageLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//b) image in "editable-stuff" directory and use require("") to import here,
//      i.e: imageLink: require("../editable-stuff/johnDoe.png"),
//c) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: imageLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../assets/img/dzenan.png"),
    imageSize: "50%",
    message:
        "My name is Dzenan Cindrak. I’m a graduate of 2022 from Telecom SudParis (Institut Polytechnique de Paris) with a MSc in Architecture and Intelligence for networks. I'm passionate about DevOps, Cloud and Networking, and I would like to pursue as a DevOps Engineer/SRE. In my free time I like discovering and learning new technologies and coding open source projects.",
    resume: "https://www.canva.com/design/DAE71WBdDmo/JndfUaE5Ad2oZ1GOjvV4xA/view?utm_content=DAE71WBdDmo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "DzeCin",
    reposLength: 4,
    specificRepos: [],
};

// SKILLS SECTION
const skills = {
    show: false,
    heading: "Skills",
    hardSkills: [
        {name: "Python", value: 90},
        {name: "SQL", value: 75},
        {name: "Data Structures", value: 85},
        {name: "C/C++", value: 65},
        {name: "JavaScript", value: 90},
        {name: "React", value: 65},
        {name: "HTML/CSS", value: 55},
        {name: "C#", value: 80},
    ],
    softSkills: [
        {name: "Goal-Oriented", value: 80},
        {name: "Collaboration", value: 90},
        {name: "Positivity", value: 75},
        {name: "Adaptability", value: 85},
        {name: "Problem Solving", value: 75},
        {name: "Empathy", value: 90},
        {name: "Organization", value: 70},
        {name: "Creativity", value: 90},
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "If you want to contact me, feel free to do so by sending me a message on LinkedIn or an email at",
    email: "dzenancindrak@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: 'DevOps engineer',// Here Add Company Name
            date: 'October 2022 – Present',
            country: 'Elca Cloud Services - Lausanne, Switzerland',
        },
        {
            role: 'Network and automation consultant engineer (internship)',
            country: 'CNS Communications - Paris & Lyon, France',
            date: 'October 2021 – October 2022',
        },
    ]
}

// Blog SECTION
//  const blog = {
//   show: true,
// };

export {navBar, mainBody, about, repos, skills, getInTouch, experiences, certifications};
