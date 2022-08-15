const projects = [
    {
        id: 0,
        sort: 1,
        title: "Virtual Realty",
        img: "https://i.imgur.com/GLajEK2.png",
        description: "Software Engineering Immersive (SEI) Bootcamp Project 4/ Capstone - A real estate page",
        technologies: [
            [<i className="fa-brands fa-html5"></i>, "HTML"],
            [<i className="fa-brands fa-css3-alt"></i>, "CSS"],
            [<i className="fa-brands fa-js"></i>, "JavaScript"],
            [<i className="fa-brands fa-react"></i>, "React"],
            [<i className="fa-brands fa-node"></i>,"Nodejs"],
            [<i className="devicon-express-original"></i>,"Express"],
            [<i className="fa fa-github"></i>, "Github"],
            [<i className="fa-solid fa-cloud"></i>, "RESTapi"],
            [<i className="devicon-mongodb-plain colored"></i>, "MongoDB"],
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
        img: "https://i.imgur.com/A8YGaND.png",
        description: "Software Engineering Immersive (SEI) Bootcamp Project 3 - An e-commerce website featuring computer rigs and equipment. My team and I utilized Github to collaborate and mitigate the risk of conflicting code. I set up and organized the React components to dynamically render the desired data when the user navigates to any section. As the project lead, I managed the Github branches, designed the UI/UX and set up the logic and functions to ensure the front-end elements interact with the back-end.",
        technologies: [
            [<i className="fa-brands fa-html5"></i>, "HTML"],
            [<i className="fa-brands fa-css3-alt"></i>, "CSS"],
            [<i className="fa-brands fa-js"></i>, "JavaScript"],
            [<i className="fa-brands fa-react"></i>, "React"],
            [<i className="fa-brands fa-node"></i>,"Nodejs"],
            [<i className="devicon-express-original"></i>,"Express"],
            [<i className="fa fa-github"></i>, "Github"],
            [<i className="fa-solid fa-cloud"></i>, "RESTapi"],
            [<i className="devicon-mongodb-plain colored"></i>, "MongoDB"],
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
        deploymentLink: "https://leetrigs.herokuapp.com/",
    },
    {
        id: 2,
        sort: 1,
        title: "Dungeon Fighter",
        img: "https://i.imgur.com/SCh6dgB.png",
        description: "Software Engineering Immersive (SEI) Bootcamp Project 1 - A turn-based game with a win-lose condition. This features animations using Canvas (with JavaScript) to handle the logic for additional combat interactions, exploration and a pseudo-inventory system.",
        technologies: [
            [<i className="fa-brands fa-html5"></i>, "HTML"],
            [<i className="fa-brands fa-css3-alt"></i>, "CSS"],
            [<i className="fa-brands fa-js"></i>, "JavaScript"],
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
        title: "Poké Portal",
        img: "https://i.imgur.com/wbSFzPq.png",
        description: "Software Engineering Immersive (SEI) Bootcamp Project 2 - A personalizable Pokedex. Using a free pokemon API to populate the Pokedex, the user has access to almost 1,000 pokemon. The user can view stats for any individual pokemon, as well as  create/add them to a team of up to 5 pokemon which the user can name and share with anyone. This website uses full CRUD functionality and stores all of the data using MongoAtlas.",
        technologies: [
            [<i className="fa-brands fa-html5"></i>,"HTML"],
            [<i className="fa-brands fa-css3-alt"></i>,"CSS"],
            [<i className="fa-brands fa-js"></i>,"Javascript"],
            [<i className="fa-brands fa-node"></i>,"Nodejs"],
            [<i className="devicon-express-original"></i>,"Express"],
            [<i className="fa-solid fa-cloud"></i>,"RESTapi"],
            [<i className="devicon-mongodb-plain colored"></i>,"MongoDB"],
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
        deploymentLink: "https://pb-poke-portal.herokuapp.com/",
    },
]

export const getProjects = () => {
    return projects
}