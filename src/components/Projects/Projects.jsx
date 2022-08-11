/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { ProjectNav } from "./ProjectNav/ProjectNav"
import { getBootcampProjects } from "../../Data/Projects.js"
/*========================================
        Import components
========================================*/
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx"
import { ProjectsSectionBootcamp } from "./ProjectsSection/ProjectsSectionBootcamp.jsx"
import { ProjectsSectionPersonal } from "./ProjectsSection/ProjectsSectionPersonal.jsx"
import { ProjectsSectionAll } from "./ProjectsSection/ProjectsSectionAll.jsx"

export const Projects = () => {
    const [projectsNav, setProjectsNav] = useState({
        activeSection: 1,
        allSections: [
            {
                id: 0,
                name: "Personal",
            },
            {
                id: 1,
                name: "Bootcamp",
            },
            {
                id: 2,
                name: "View All",
            },
        ]
    })

    const projectsBc = [
        {
            id: 0,
            sort: 1,
            title: "VirtualRealty",
            img: "https://github.com/PBasham/virtual-realty/raw/main/public/imgs/readme/readme-homepage.png",
            description: "This is my CAPSTONE project from my bootcamp.",
            technologies: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-js"></i>,
                <i className="fa-brands fa-react"></i>,
                <i class="devicon-github-original colored"></i>,
                <i className="fa-solid fa-cloud"></i>,
                <i className="devicon-mongodb-plain colored"></i>,
            ],
            collaboration: false,
            team: [
                {
                    id: 0,
                    name: "",
                    githubLink: "",
                },
            ],
            githubLink: "https://github.com/PBasham/virtual-realty",
            deploymentLink: "https://pb-virtual-realty.herokuapp.com",
        },
        {
            id: 1,
            sort: 1,
            title: "LeetRigs",
            img: "https://github.com/PBasham/mern-project-3/blob/main/public/imgs/readMe/header-img.png?raw=true",
            description: "This is my third project from my bootcamp and was my first time working with a team using github to design a website and it's functionality. My team and I build out an e-commerce website featuring computer rigs and equipment. I was the lead for this project managing the Github branches, handling the styling and handling aspect of both the front and back end.",
            technologies: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-js"></i>,
                <i className="fa-brands fa-react"></i>,
                <i class="devicon-github-original colored"></i>,
                <i className="fa-solid fa-cloud"></i>,
                <i className="devicon-mongodb-plain colored"></i>,
            ],
            collaboration: true,
            team: [
                {
                    id: 0,
                    name: "Bobby Romano",
                    githubLink: "https://github.com/raromano92",
                },
                {
                    id: 1,
                    name: "Ian De Leon",
                    githubLink: "https://github.com/IanDLeon",
                },
            ],
            githubLink: "https://github.com/PBasham/mern-project-3",
            deploymentLink: false,
        },
        {
            id: 2,
            sort: 1,
            title: "Dungeon Fighter",
            img: "https://github.com/PBasham/Dungeon-fighter/blob/main/imgs/ReadMe/wireframe_startScreen.png?raw=true",
            description: "This was my very first project for my bootcamp General Assembly, the goal was to create a game using html Canvas and Javascript that had a win and lose condition. This features animations within canvas with javascript to handle the logic for interactions. I really enjoyed this project because building games is somehting I really want to do as a hobby.",
            technologies: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-js"></i>
            ],
            collaboration: false,
            team: [
                {
                    id: 0,
                    name: "",
                    githubLink: "",
                },
            ],
            githubLink: "https://github.com/PBasham/Dungeon-fighter",
            deploymentLink: "https://pbasham.github.io/Dungeon-fighter/",
        },
        {
            id: 3,
            sort: 1,
            title: "Pokemon-Tracker",
            img: "https://github.com/PBasham/Pokemon-Tracker/blob/main/imgs/readme/PT-MainPage.png?raw=true",
            description: "Pokemon-Tracker is my second project for my bootcamp, it makes use of a free pokemon api to populate the ''pokedex'' with amost 1,000 pokemon. From this ''pokedex'', you as a user can view stats for an individual pokemon as well as add them to / create a team of up to 5 pokemon of your choice, name it and share it for anyone to be able to view. This website used full CRUD functionality and stores all of the data using MongoAtlas.",
            technologies: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-js"></i>,
                <i className="fa-brands fa-node"></i>,
                <i className="devicon-express-original"></i>,
                <i className="fa-solid fa-cloud"></i>,
                <i className="devicon-mongodb-plain colored"></i>,
            ],
            collaboration: false,
            team: [
                {
                    id: 0,
                    name: "",
                    githubLink: "",
                },
            ],
            githubLink: "https://github.com/PBasham/Pokemon-Tracker",
            deploymentLink: false,
        },
    ]


    const [selectedProject, setSelectedProject] = useState({})

    const handleNavClick = (id) => {
        setProjectsNav({
            ...projectsNav,
            activeSection: id,
        })
    }
    return (
        <div className="section-projects">
            <ProjectDetail
                selectedProject={selectedProject}
            />
            <div className="project-nav">
                <ProjectNav projectsNav={projectsNav} setProjectsNav={setProjectsNav} handleNavClick={handleNavClick} />
                <div className="project-nav-bar"></div>
            </div>
            <div className="project-list">
                {projectsNav.activeSection === 0 ?
                    <ProjectsSectionPersonal />
                    :
                    null
                }
                {projectsNav.activeSection === 1 ?
                    <ProjectsSectionBootcamp projectsBc={projectsBc} />
                    :
                    null
                }
                {projectsNav.activeSection === 2 ?
                    <ProjectsSectionAll projectsBc={projectsBc} />
                    :
                    null
                }
            </div>
        </div>
    )
}
