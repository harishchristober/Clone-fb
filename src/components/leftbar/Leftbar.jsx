import "./leftbar.css"
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";
  import { Users } from "../../dummyData";
import Friends from "../friends/Friends";

export default function Leftbar() {
    return (
        <div className="leftbar">
           <div className="leftbarwrapper">
                <ul className="leftbarlist">
                    <li className="leftbarlistitem">
                        <RssFeed className = "leftbaricon" />
                        <span className="leftbarlistname">Feed</span>
                    </li>
                    <li className="leftbarlistitem">
                        <Chat className = "leftbaricon" />
                        <span className="leftbarlistname">Chats</span>
                    </li>
                    <li className="leftbarlistitem">
                        <PlayCircleFilledOutlined className = "leftbaricon" />
                        <span className="leftbarlistname">Videos</span>
                    </li>
                    <li className="leftbarlistitem">
                        <Group className = "leftbaricon" />
                        <span className="leftbarlistname">Groups</span>
                    </li>
                    <li className="leftbarlistitem">
                        <Bookmark className = "leftbaricon" />
                        <span className="leftbarlistname">Bookmark</span>
                    </li>
                    <li className="leftbarlistitem">
                        <HelpOutline className = "leftbaricon" />
                        <span className="leftbarlistname">Question</span>
                    </li>
                    <li className="leftbarlistitem">
                        <WorkOutline className = "leftbaricon" />
                        <span className="leftbarlistname">Jobs</span>
                    </li>
                    <li className="leftbarlistitem">
                        <Event className = "leftbaricon" />
                        <span className="leftbarlistname">Events</span>
                    </li>
                    <li className="leftbarlistitem">
                        <School className = "leftbaricon" />
                        <span className="leftbarlistname">Courses</span>
                    </li>
                </ul>
                <button className="leftbarbtn">Show more</button>
                <hr className="leftbarhr" />
                <ul className="leftbarfriends">
                   
                   {Users.map((user)=> (
                       <Friends  key = {user.id} user = {user} />
                   ))}
                  
                </ul>

           </div>
        </div>
    )
}
