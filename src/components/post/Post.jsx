import "./post.css"
import { MoreVert } from "@material-ui/icons";
import {Users} from "./../../dummyData"
import { useState } from "react";
 

export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false)

    function addLike() {
        setLike(isLike? like-1 : like+1);
        setIsLike(!isLike);
    }

    return (
        <div className= "post">
          <div className="postwrapper">
              <div className="posttop">
                  <div className="posttopleft">
                      <img src= {Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" className="postprofileimg" />
                      <span className="postusername"> {Users.filter((user) => user.id === post.userId)[0].username} </span>
                      <span className="postdate">{post.date}</span>
                  </div>
                  <div className="posttopright">
                      <MoreVert className="postmoreicon"/>
                  </div>
              </div>
              <div className="postcenter">
                  <span className="posttext">{post?.desc}</span>
                  <img src= {post.photo} alt="" className="postimg" />
              </div>
              <div className="postbottom">
                  <div className="postbottomleft">
                      <img onClick= {addLike} src="./assests/like.png" alt="" className="likeicon" />
                      <img onClick= {addLike} src="./assests/heart.png" alt="" className="likeicon" />
                      <span className="likecount">{like} likes</span>
                  </div>
                  <div className="postbottomright">
                  <span className="postcomment">{post.comment} comments</span>
                  </div>
              </div>
          </div>
        </div>
    )
}
