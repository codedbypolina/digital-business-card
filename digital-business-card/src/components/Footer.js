import twitter from "../images/twitter.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/codedbypolina" target="_blank"><img src={twitter} className="icon" alt="Twitter Icon"></img></a>
            <a href="https://github.com/codedbypolina" target="_blank"><img src={github} className="icon" alt="Github Icon"></img></a>
            <a href="https://www.instagram.com/codedbypolina/" target="_blank"><img src={instagram} className="icon" alt="Instagram Icon"></img></a>
        </div>
    )
}