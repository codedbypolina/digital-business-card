import photo from "../images/headshot.jpg"

export default function Header() {
    return (
        <div>
            <img src={photo} className="profile" alt="Profile Picture" height="300px" />
        </div>
    )
}