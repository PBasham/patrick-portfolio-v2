/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
/*========================================
        Import Components
========================================*/
import { NavBar } from "../../components/NavBar/NavBar"
import { Home } from "../../components/Home/Home"
import { About } from "../../components/About/About"
import { Projects } from "../../components/Projects/Projects"
import { contact } from "../../components/Contact/Contact"
/*========================================
        Import Styling
========================================*/


export const ProfilePage = () => {

    const [navlink, setNavLinks] = useState({
        activeNavLink: null,
        navLinks: [
            {
                id: 0,
                name: "HOME",
            },
            {
                id: 1,
                name: "ABOUT",
            },
            {
                id: 2,
                name: "PROJECTS",
            },
            {
                id: 3,
                name: "CONTACT",
            },
        ]
    })

  return (
    <div className="profile-page">
        <NavBar />
        <div className="page-content-wrapper">

        </div>
    </div>
  )
}

