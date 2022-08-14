/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { getNavLinks } from "../../Data/NavBarLinks.js"
import { getAboutCards } from "../../Data/AboutCards.js"
/*========================================
        Import Components
========================================*/
import { NavBar } from "../../components/NavBar/NavBar.jsx"
import { Home } from "../../components/Home/Home.jsx"
import { About } from "../../components/About/About.jsx"
import { Projects } from "../../components/Projects/Projects.jsx"
import { Contact } from "../../components/Contact/Contact.jsx"
import { Skills } from "../../components/Skills/Skills.jsx"

export const ProfilePage = () => {

    const [navLinks, setNavLinks] = useState({
        activeNavLink: 0,
        allNavLinks: []
    })

    useEffect(() => {
        setNavLinks({
            ...navLinks,
            allNavLinks: getNavLinks()
        })
    }, [])

    return (
        <>
            <div className="profile-page">
                <NavBar navLinks={navLinks} setNavLinks={setNavLinks} />
                <div className="section">
                    {/* <Home navLinks={navLinks} setNavLinks={setNavLinks} />
                    <About />
                    <Projects />
                    <Contact /> */}
                    {navLinks.activeNavLink === 0 ? <Home navLinks={navLinks} setNavLinks={setNavLinks} /> : null}
                    {navLinks.activeNavLink === 1 ? <About /> : null}
                    {navLinks.activeNavLink === 2 ? <Skills /> : null}
                    {navLinks.activeNavLink === 3 ? <Projects /> : null}
                    {navLinks.activeNavLink === 4 ? <Contact /> : null}
                </div>
            </div>
        </>
    )
}

