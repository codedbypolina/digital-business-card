import twitter from "../images/twitter.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} className="icon"></img>
            <img src={github} className="icon"></img>
            <img src={instagram} className="icon"></img>
        </div>
    )
}