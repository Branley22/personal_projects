import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>Kids</span>
          <span>DVD</span>
          <Notifications className="icons" />
          <img src="https://thumbnails.production.thenounproject.com/Nay_NT485Tqo_Cvg31QzHcq_6Fw=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D1143C78-1A18-4BF6-8D37-33AB2D694793.jpg" alt="" />
          <ArrowDropDown className="icons" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
