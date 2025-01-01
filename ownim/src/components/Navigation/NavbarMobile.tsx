"use client"
import Link from "next/link";
import { MdHome, MdMiscellaneousServices, MdOutlineContactPhone } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ActionBarImage from "./ActionbarImage";
import FadeMenu from '../utils/PopUpMenu'
import useWindowSize from "../utils/WindowSize";
import '../../styles/NavBar.module.css'

const NavbarMobile = () => {
  const windowWidth = useWindowSize().width;
  const tabWidth = windowWidth/4;
  const currentPath = usePathname();
  return (
    <>
      <div  style={{backgroundColor:'white'}} >
        <div  >
          <nav  >
          <ActionBarImage/>
            <ul   style={{paddingTop:5, marginLeft:10, alignContent:'center', display:'flex', flexDirection:'row'}} >
              <li style={{width:tabWidth,display:'inline'}} >
                <Link href="/">
                <MdHome color={currentPath== "/" ? "#e91e63":"black"} size={24} style={{marginLeft:5}} />
                  <p style={{color:currentPath == "/" ? "#e91e63":"black"}} >Home</p>
                </Link>
              </li>
              <li style={{width:tabWidth,display:'inline'}} >
                <div >
                <MdMiscellaneousServices  color={currentPath.includes("/services") ? "#e91e63":"black"} size={24} style={{marginLeft:11}} />
                  <FadeMenu/>
              
                  
                </div>
              </li>
              <li style={{width:tabWidth,display:'inline'}} >
                <Link href="/about">
                <AiFillProfile color={currentPath == "/about" ? "#e91e63":"black"} size={24} style={{marginLeft:10}} />
                  <p style={{color:currentPath == "/about" ? "#e91e63":"black"}}>About Us</p>
                </Link>
              </li>
              <li style={{width:tabWidth,display:'inline'}} >
                <Link href="/contact" >
                <MdOutlineContactPhone color={currentPath == "/contact" ? "#e91e63":"black"} size={24} style={{marginLeft:25}} />
                  <p style={{color:currentPath == "/contact" ? "#e91e63":"black"}} >Contacts Us</p>
                </Link>
              </li>
            </ul>
          </nav>
      
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;