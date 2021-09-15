import "./online.css"

export default function Online({user}) {
    return (
        <div>
             <li className="rightbarfriendlist">
                <div className="profilepiccontainer">
                <img src={user.profilePicture} className= "rightbarfriendimg" alt="" />
                <span className="onlinebadge"></span>
                </div>
              
                <span className="rightbarfriendname"> {user.username} </span>
            </li>
        </div>
    )
}
