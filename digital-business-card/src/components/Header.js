import photo from "../images/headshot.jpg"

export default function Header() {
    return (
        <div className="header">
            <img src={photo} className="profile" alt="Profile Picture" />
        </div>
    )
}