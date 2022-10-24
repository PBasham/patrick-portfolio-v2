/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
// Google Analytics --------------------------------------------------
import ReactGA from "react-ga"


export const Contact = ({ setNavLinks }) => {

    useEffect(() => {
        setNavLinks((current) => {
            return {
                ...current,
                activeNavLink: 4
            }
        })
        ReactGA.pageview("/contact")
    }, [])

    return (
        <div id="contact" className="section-contact">
            <p>Contact me to chat about job or freelance opportunities</p>
            <form action="https://formsubmit.co/1297a0fa1a7f93e4f761fce3583a363c" method="POST">
                <label htmlFor="email">Email<input name="email" type="email" /></label>
                <label htmlFor="name">Name<input name="name" type="text" /></label>
                <label htmlFor="message">Message<textarea name="message" id="" cols="10" rows="10"></textarea></label>
                <input type="submit" value="Send Email" />
            </form>
        </div>
    )
}
