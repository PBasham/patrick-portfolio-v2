/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"

export const NavBar = ({ navLinks, setNavLinks }) => {


    return (
        <div className="nav">
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
                            onClick={() => { setNavLinks({ ...navLinks, activeNavLink: link.id }) }}
                            // smooth={true}
                            // duration={750}
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
                <a className="resume" href="https://drive.google.com/file/d/11nqCIAy09AXARdXCuH09Wh1aIagw2YEU/view?usp=sharing" target={"_blank"}>CV</a>
            </div>
        </div>
    )
}
