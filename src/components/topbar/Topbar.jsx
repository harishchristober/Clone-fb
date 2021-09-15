 import "./topbar.css";
 import { Search, Person, Chat, Notifications, Facebook } from "@material-ui/icons";
 import {
    Link
  } from "react-router-dom";

 export default function Topbar() {
     return (
         
       <div className="topbarcontainer">
           <div className="topbarleft">
                <Facebook className= "fblogo" />
                <Link to="/"  style= {{textDecoration:"none", color:"white"}}>
               <span className="logo">CloneFB</span>
               </Link>
           </div>
           <div className="topbarcenter">
            <div className="searchbar">
            <Search className= "searchicon" />
            <input placeholder="Search for friends, posts or videos" className="searchinput" />
            </div>
           </div>
           <div className="topbarright">
               <div className="topbarlinks">
                <Link to="/home"  style= {{textDecoration:"none", color:"white"}}>
                <span    className="topbarlink">Home</span>
                 </Link>
                 <Link to="/profile"  style= {{textDecoration:"none", color:"white"}}>
                <span   className="topbarlink">Profile</span>
                   </Link>
               </div>
               <div className="topbariconlist">
                   <div className="topbaricon">
                        <Person  />
                        <span className="topbariconbadge">1</span>
                   </div>
                   <div className="topbaricon">
                        <Chat  />
                        <span className="topbariconbadge">3</span>
                   </div>
                   <div className="topbaricon">
                        <Notifications  />
                        <span className="topbariconbadge">7</span>
                   </div>
               </div>
               <Link to="/"  style= {{textDecoration:"none"}}>
               <img src="./assests/person/7.jpeg" alt="" className="profilepic"/>
               </Link>
           </div>
       </div>
      
     )
 }
 