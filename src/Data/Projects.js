const projects = [
    {
        id: 0,
        sort: 1,
        title: "Virtual Realty",
        img: "https://i.imgur.com/GLajEK2.png",
        description: "This is my CAPSTONE project from my bootcamp.",
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
        description: "This is my third project from my bootcamp and was my first time working with a team using github to design a website and it's functionality. My team and I build out an e-commerce website featuring computer rigs and equipment. I was the lead for this project managing the Github branches, handling the styling and handling aspect of both the front and back end.",
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
        deploymentLink: false,
    },
    {
        id: 2,
        sort: 1,
        title: "Dungeon Fighter",
        img: "https://i.imgur.com/SCh6dgB.png",
        description: "This was my very first project for my bootcamp General Assembly, the goal was to create a game using html Canvas and Javascript that had a win and lose condition. This features animations within canvas with javascript to handle the logic for interactions.",
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
        description: "Pokemon-Tracker is my second project for my bootcamp, it makes use of a free pokemon api to populate the ''pokedex'' with amost 1,000 pokemon. From this ''pokedex'', you as a user can view stats for an individual pokemon as well as add them to / create a team of up to 5 pokemon of your choice, name it and share it for anyone to be able to view. This website used full CRUD functionality and stores all of the data using MongoAtlas.",
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
        deploymentLink: false,
    },
]

export const getProjects = () => {
    return projects
}