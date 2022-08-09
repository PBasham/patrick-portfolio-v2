/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { getNavLinks } from "../../Data/NavBarLinks.js"
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

    const [navLinks, setNavLinks] = useState({
        activeNavLink: 0,
        allNavLinks: []
    })

    useEffect(() => {
        setNavLinks({...navLinks,
            allNavLinks: getNavLinks()})
    },[])

  return (
    <div className="profile-page">
        <NavBar navLinks={navLinks} setNavLinks={setNavLinks} />
        <div className="page-content-wrapper">

        </div>
    </div>
  )
}

