
/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
// Google Analytics --------------------------------------------------
import ReactGA from "react-ga"
/*========================================
        Import components
========================================*/
import { AboutCards } from "../AboutCards/AboutCards"


export const About = ({ aboutCards, setNavLinks }) => {

    useEffect(() => {
        setNavLinks((current) => {
            return {
                ...current,
                activeNavLink: 1
            }
        })
        // ReactGA.pageview("/about")
        ReactGA.ga('send', 'pageview', '/about')
    }, [])

    return (
        <div id="about" className="section-about">
            <div className="quote-div">
                <div className="quote">
                    <p id="quote">The electric light did not come from the continuous improvement of candles.</p>
                    <p>- Oren Harari</p>
                </div>
            </div>
            <div className="about-cards">
                <AboutCards />
            </div>
        </div>
    )
}
