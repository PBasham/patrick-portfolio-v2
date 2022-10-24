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
import ReactGA from "react-ga"
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
        const TRACKING_ID = "UA-246697468-1"
        ReactGA.initialize(TRACKING_ID)
        // report page view
        // ReactGA.pageview(window.location.pathname + window.location.search)

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
                    <NavBar navLinks={navLinks} />
                    <div className="section">
                        <Routes>
                            <Route path="/home" element={<Home navLinks={navLinks} setNavLinks={setNavLinks} />} />
                            <Route path="/about" element={<About setNavLinks={setNavLinks} />} />

                            <Route path="/skills" element={<Skills setNavLinks={setNavLinks} />} />

                            <Route path="/projects" element={<Projects setNavLinks={setNavLinks} />} />

                            <Route path="/contact" element={<Contact setNavLinks={setNavLinks} />} />
                            {/* <Route path="/*" element={<Navigate to="/home" />} /> */}
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}

