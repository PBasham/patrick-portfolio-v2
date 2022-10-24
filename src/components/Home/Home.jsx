/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect"
import ReactGA from "react-ga"

export const Home = ({ setNavLinks }) => {

    useEffect(() =>{
        setNavLinks((current) => {
            return {
                ...current,
                activeNavLink: 0
            }
        })
    },[])

    const handleClickGA = () => {
        ReactGA.event({
            category: "Button",
            action: "Click 'Hire me' button on  Home Page"
        })
    }

    return (
        <div id="home" className="section-home">
            <div className="home-content">

                <div className="img-div">
                    <img src="./img/profile_pic.jpg" alt="Picture of me!" />
                </div>
                <div className="text-div">

                    <div className="text">
                        <h1>Hello,</h1>
                        <p>My name is Patrick Basham and I
                        </p>
                        <div className="typed-text text-teal">
                            <Typewriter
                                options={{
                                    strings: [
                                        "am a Jr Web Developer.",
                                        "thrive to optimize.",
                                        "am always looking to learn more.",
                                        "am highly motivated.",
                                        "love to code!",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <Link onClick={handleClickGA} to="/contact" >Hire me</Link>
                </div>
            </div>
        </div>
    )
}
