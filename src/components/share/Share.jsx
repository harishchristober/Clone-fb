import "./share.css"
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
           <div className="sharewrapper">
               <div className="sharetop">
                   <img src="./assests/person/7.jpeg" alt="" className="shareprofilepic" />
                   <input  placeholder="What's in your mind Harry?" className="sharetext" />
               </div>
                <hr className="sharehr"/>
               <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">
                            <PermMedia htmlColor="black" className = "shareicon" />
                            <span className="shareoptiontext">Photo/Video</span>
                        </div>
                        <div className="shareoption">
                            <Label htmlColor="Blue" className = "shareicon" />
                            <span className="shareoptiontext">Tag</span>
                        </div>
                        <div className="shareoption">
                            <Room htmlColor="Green" className = "shareicon" />
                            <span className="shareoptiontext">Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotions htmlColor="Goldenrod" className = "shareicon" />
                            <span className="shareoptiontext">Feeling</span>
                        </div>
                       
                    </div>
                    <button className="sharebtn">Post</button>
               </div>
           </div>
        </div>
    )
}
