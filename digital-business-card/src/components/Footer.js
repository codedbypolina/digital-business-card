import twitter from "../images/twitter.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter}></img>
            <img src={github}></img>
            <img src={instagram}></img>
        </div>
    )
}