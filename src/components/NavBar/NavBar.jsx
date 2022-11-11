/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"
import ReactGA from "react-ga"
import { useState } from "react"

export const NavBar = ({ navLinks }) => {

    
    const [navOpen, setNavOpen] = useState(false)
    
    
    const handleClickGA = (page) => {

        ReactGA.event({
            category: "Navigation Button",
            action: `Click on nav button to access ${page} page.`
        })
    }

    const handleNavChange = () => {
        setNavOpen((current) => {
            return (!current)
            })
    }
    const handleNavClose = () => {
        setNavOpen(false)
    }

    const handleNavClick = (gaLink) => {
        handleClickGA(gaLink)
        handleNavClose()
    }


    return (
        <div className={`nav ${navOpen ? `nav-open` : null}`}>
            <div className={`hamburger-menu-div`}>
                <div className="hamburger-menu" onClick={handleNavChange} ></div>
            </div>
            <div className="nav-logo">
                <img src="./img/logo.png" alt="" />
            </div>
            <ul className="nav-btns">
                {navLinks.allNavLinks.map((link) => (
                    // <li
                    // key={link.id}
                    // >
                    <Link
                        key={link.id}
                        to={link.to}
                        className={`nav-btn ${link.id === navLinks.activeNavLink ? "active" : ""}`}
                        onClick={() => handleNavClick(link.to)}
                    >
                        {link.name}
                    </Link>
                    // </li>
                ))}
            </ul>
            <div className="nav-socials">
                <a id="link-github" className="profile-link" href="https://github.com/PBasham" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
                <a id="link-linkedin" className="profile-link" href="https://www.linkedin.com/in/patrickbasham/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a className="resume" href="https://drive.google.com/file/d/11nqCIAy09AXARdXCuH09Wh1aIagw2YEU/view?usp=sharing" target={"_blank"}>
                    <p>CV</p>
                </a>
            </div>
        </div>
    )
}
