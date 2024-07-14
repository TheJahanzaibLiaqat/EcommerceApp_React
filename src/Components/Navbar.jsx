import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {

    const [Open, setOpen] =useState(false)
    

    const RespWeb = () =>{
      setOpen(false)
    }
  return (
    <div>

        {Open ? <IoCloseSharp className="md:hidden mr-10 h-6 w-6" onClick={()=>setOpen(!Open)}/> :  <TiThMenuOutline className="md:hidden mr-10 h-6 w-6" onClick={()=>setOpen(!Open)}/>}
        
     <ul className="hidden md:flex space-x-7 mr-16 items-center font-semibold">
        <li className=" hover:text-white">
            <Link to="/">Home</Link>
        </li>

        <li className=" hover:text-white">
            <Link to="/about">About</Link>
        </li>

        <li className=" hover:text-white">
            <Link to="/product">Product</Link>
        </li>

        <li className=" hover:text-white">
            <Link to="/contact">Contact</Link>
        </li>


        <li className=" hover:text-white">
            <Link to="/cart"  >
            <IoCartOutline className="text-xl"/>
            </Link>
        </li>
     </ul>


     {/* Responsive */}

     <ul className={`block md:hidden fixed z-[1] top-[80px] bg-yellow-100 text-2xl pt-36 space-y-6 text-center w-full h-screen 
     ${Open ? 'left-0': 'left-[-100%]' }
     items-center text-gray-900`}>
        <li className=" hover:text-yellow-400">
            <Link to="/" onClick={RespWeb}>Home</Link>
        </li>

        <li className=" hover:text-yellow-400">
            <Link to="/about" onClick={RespWeb}>About</Link>
        </li>

        <li className=" hover:text-yellow-400">
            <Link to="/product" onClick={RespWeb}>Product</Link>
        </li>

        <li className=" hover:text-yellow-400">
            <Link to="/contact" onClick={RespWeb}>Contact</Link>
        </li>


        <li className=" hover:text-yellow-400">
            <Link to="/cart"  onClick={RespWeb}>
            <IoCartOutline className="text-xl mx-auto"/>
            </Link>
        </li>
     </ul>
     
     
    

       
     
     
     

    </div>
  )
}

export default Navbar
