import "./rightbar.css"
import {Users} from "./../../dummyData"
import Online from "../online/Online"

export default function Rightbar( {profile}) {
    function HomeRightbar() {
        return (
            <div className= "rightbar">
               <div className="rightbarwrapper">
                   <div className="birthdaycontainer">
                       <img src="./assests/gift.png" alt="" className="birthdayimg" />
                       <span className="birthdaytext"><b>Berlin james</b> and <b> other 7 friends</b> have a birthday today</span>
                   </div>
                   <img src="./assests/ad.png" alt="" className="adimg" />
                   <h4 className="rightbartitle">Online Friends</h4>
                   <ul className="rightbarfriendslists">
                 {Users.map((user)=> (
                     <Online 
                     
                     key = {user.id}
                    user = {user}                 
                     />
                 ))}
                   
        
                       
                   </ul>
                   </div> 
            </div>
        )
    }

    function ProfileRightbar() {
        return (
            <div className= "rightbar">
               <h4 className="rightbarprofiletitle">User Information</h4>
               <div className="rightbarinfo">
                   <div className="rightbarinfoitem">
                       <span className="rightbarkey">City:</span>
                       <span className="rightbarvalue">Bhavani</span>
                   </div>
                   <div className="rightbarinfoitem">
                       <span className="rightbarkey">DOB:</span>
                       <span className="rightbarvalue">8 November 1998</span>
                   </div>
                   <div className="rightbarinfoitem">
                       <span className="rightbarkey">Relationship:</span>
                       <span className="rightbarvalue">Single</span>
                   </div>
               </div>
               <h4 className="rightbarfriendtitle">Your Friends</h4>
                <div className="rightbarfollowings">
                    <div className="rightbarfollowing">
                        <img src="./assests/person/1.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Janell Shrum</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="./assests/person/2.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Alex Durden</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="./assests/person/3.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Dora Hawks</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="./assests/person/4.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Thomas Holden</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="./assests/person/5.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Shirley Beauchamp</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="./assests/person/6.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">Travis Bennett</span>
                    </div>
                </div>

                 
                   <img src="./assests/ad.png" alt="" className="adimg" />
                  
                 
                    
            </div>
        )
    }
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
      );


}
