const bootcampProjects = [
    {
        id: 0,
        sort: 1,
        title: "Virtual Realty",
        img: "https://i.imgur.com/GLajEK2.png",
        description: "Software Engineering Immersive (SEI) Bootcamp Project 4/ Capstone - A real estate page. VirtualRealty is targeted to create an experience of seeing homes, without ever leaving the comfort of your home (like virtual reality). I included features that I wish to see in real estate websites (like a monthly payment estimator, concierge services, etc.). As the final project, I also wanted to utilize State as much as possible by rendering the components and data that would allow to update and re-render upon user interaction: (1) Tracking which clicked components to render the corresponding components in navigation; (2) Keeping track of user so the components will render and display correct information; (3) Allowing users to view their own data; (4) Communicating with the back-end to pull corresponding data; and (5) Tracking current rendered list, homes, etc. (based on filters)",
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
        deploymentLink: "https://leetrigs.herokuapp.com",
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
        deploymentLink: "https://pb-poke-portal.herokuapp.com",
    },
]

export const getProjects = () => {
    return bootcampProjects
}

export const personalProjects = [
    {
        id: 0,
        sort: 1,
        title: "Unnamed Habit Tracker Mobile App",
        img: "http://topelforman.com/wp-content/uploads/2018/10/2018.02.08_aa.jpg",
        description: <p>Unnamed Habit Tracker application is an application built for the better good, focusing on mental health that has full CRUD functionality where the user can:
        <br/>• Create and track Goals/Habits set with due dates and frequency  throughout the day/week/month.
        <br/>• Track their daily moods.
        <br/>• Create Journal Entries.
        <br/>• View completion rates of their goals, as well as use their mood tracker/journal entries to make connections between their goal/habit completion and figure out what's helping/hindering.</p>,
        technologies: [
            [<i className="fa-brands fa-react"></i>, "React Native"],
            [<i className="fa-brands fa-js"></i>, "JavaScript"],
            [<i class="devicon-typescript-plain colored"></i>, "TypeScript"],
            [<i className="fa-brands fa-css3-alt"></i>, "CSS"],
            [<i className="fa fa-git"></i>, "Git"],
            [<i className="fa fa-github"></i>, "Github"],
        ],
        collaboration: false,
        team: [
            {
                id: 0,
                name: "",
                githubLink: "",
            },
        ],
        githubLink: "hhttps://github.com/PBasham/rn-habit-tracker",
        deploymentLink: "",
    },
]