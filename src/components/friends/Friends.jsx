import "./friends.css"

export default function Friends({user}) {
    return (
        <div>
             <li className="leftbarfriendlist">
                        <img src={user.profilePicture} className= "friendimg" alt="" />
                        <span className="friendname"> {user.username} </span>
                    </li>
        </div>
    )
}
