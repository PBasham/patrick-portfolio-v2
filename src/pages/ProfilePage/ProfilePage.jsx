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
// Google Analytics --------------------------------------------------
import ReactGa from "react-ga"
// Router --------------------------------------------------
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"


export const ProfilePage = () => {

    const [navLinks, setNavLinks] = useState({
        activeNavLink: 0,
        allNavLinks: []
    })

    useEffect(() => {
        // Google Analytics
        ReactGa.initialize('G-H00VRMLXP5')
        // report page view
        ReactGa.pageview("/")

        setNavLinks((navLinks) => {
            return {
                ...navLinks,
                allNavLinks: getNavLinks()
            }
        })
    }, [])

    return (
        <>
            <div className="profile-page">
                <Router>
                    <NavBar navLinks={navLinks} setNavLinks={setNavLinks} />
                    <div className="section">
                        <Routes>
                            <Route path="/home" element={<Home navLinks={navLinks} setNavLinks={setNavLinks} />} />

                            <Route path="/about" element={<About />} />

                            <Route path="/skills" element={<Skills />} />

                            <Route path="/projects" element={<Projects />} />

                            <Route path="/contact" element={<Contact />} />
                            <Route path="/*" element={<Navigate to="/home" />} />
                            {/* {navLinks.activeNavLink === 0 ? <Home navLinks={navLinks} setNavLinks={setNavLinks} /> : null}
                            {navLinks.activeNavLink === 1 ? <About /> : null}
                            {navLinks.activeNavLink === 2 ? <Skills /> : null}
                            {navLinks.activeNavLink === 3 ? <Projects /> : null}
                            {navLinks.activeNavLink === 4 ? <Contact /> : null} */}
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}

