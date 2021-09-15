
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import "./home.css"

export default function Home() {
    return (
      <>
      <Topbar/>
      <div className="homecontainer">
        <Leftbar/>
        <Feed />
        <Rightbar />
      </div>
      </>
    )
}
