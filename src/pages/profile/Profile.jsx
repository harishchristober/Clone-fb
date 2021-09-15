import "./profile.css"
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
    return (
        <>
      <Topbar/>
      <div className="profile">
        <Leftbar/>
        <div className="profileright">
          <div className="profilerighttop">
            
            <div className="profilecover">
              <img src="./assests/post/3.jpeg" alt="" className="profilecoverimg" />
              <img src="./assests/person/7.jpeg" alt="" className="profileuserimg" />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">Harish Christober</h4>
              <span className="profileinfodesc">Just Like it!</span>
            </div>
          </div>
          <div className="profilerightbottom">
          <Feed />
        <Rightbar profile/>
          </div>
        </div>
        
      </div>
      </>
    )
}
