export const Contact = () => {
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("I've been submitted!")
    // }
    return (
        <div id="contact" className="section-contact">
            <form action="https://formsubmit.co/1297a0fa1a7f93e4f761fce3583a363c" method="POST">
                <label htmlFor="email">Email<input name="email" type="email" /></label>
                <label htmlFor="name">Name<input name="name" type="text" /></label>
                <label htmlFor="message">Message<textarea name="message" id="" cols="10" rows="10"></textarea></label>
                <input type="submit"  value="Send Email"/>
            </form>
        </div>
    )
}
