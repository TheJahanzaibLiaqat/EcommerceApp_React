import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-yellow-300 items-center flex justify-between sticky top-0 z-[1]">
      <Link to='/'>
        <img src={Logo} alt="" className="h-20 " />
      </Link>

      <Navbar />
      </div>
  )
}

export default Header
