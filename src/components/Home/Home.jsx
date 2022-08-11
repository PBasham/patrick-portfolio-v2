/*========================================
        Import Dependencies
========================================*/
import Typewriter from "typewriter-effect"

export const Home = ({ navLinks, setNavLinks }) => {
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
                                        "am a software engineer.",
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
                    <a onClick={() => {
                        setNavLinks({ ...navLinks, activeNavLink: 3 })
                    }}>Hire me</a>
                </div>
            </div>
        </div>
    )
}
