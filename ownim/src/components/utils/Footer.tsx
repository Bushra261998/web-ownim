"use client"
import React from "react";
import "../../styles/Footer.css"; // Add a CSS file for styles
import { FooterContent } from "./ScreensContent"; // Your content file
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import useWindowSize from '../utils/WindowSize'
import Image from "next/image";
import footerImage from '../../../public/footer.png'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useIsMobile } from "./DevicePlatform";


export default function Footer() {
    const router = useRouter();
    const isMobile =useIsMobile();
    const windowWidth = useWindowSize().width;
    const ColSize = isMobile?1: (windowWidth/5)-130;
    return (
        <div className="footer">
                
            <div className={isMobile?"img-mobile": "img"}  style={{justifySelf:'center', alignSelf:'center'}}>
                <Image src={footerImage} alt="Footer Logo" style={{height:isMobile?30:50,width:isMobile?60:100,justifySelf:'center',marginBottom:isMobile?12:0,}} />
            </div>
             
            <div  className="footerBody" style={{gap:2}}>

            <div className={ isMobile?"services-mobile":"services"} >
                <div  className={isMobile?"heading-mobile" : "heading"}>{FooterContent.servicesTxt}</div>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} > <Link href={"/services/gravure"}>{FooterContent.gravureLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} > <Link href={"/services/flexo"}>{FooterContent.flexoLink}</Link> </p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"}><Link href={"/services/offset"}>{FooterContent.offsetLink}</Link> </p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/services/logistics"}>{FooterContent.logisticsLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/services/software"}>{FooterContent.sofwareLink}</Link></p>
            </div>

            <div className={ isMobile?"services-mobile":"services"}  style={{marginLeft:ColSize}} >
                <div  className={isMobile?"heading-mobile" : "heading"}>{FooterContent.productText}</div>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"}><Link href={"/services/leather"}>{FooterContent.leatherLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/services/stainless"}>{FooterContent.stainlessteelLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/services/jenitorials"}>{FooterContent.janitorialsLink}</Link></p>
            </div> 
            <div className={ isMobile?"services-mobile":"services"} style={{marginLeft:ColSize}}>
                <div className={isMobile?"heading-mobile" : "heading"}>{FooterContent.quickLinksTxt}</div>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"}><Link href={"/"}>{FooterContent.homeLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/about"}>{FooterContent.aboutLink}</Link></p>
                <p className={isMobile?"detailed-text-mobile" :"detailed-text"} ><Link href={"/contact"}>{FooterContent.contactLink}</Link></p>
            </div>

            <div className={ isMobile?"services-mobile":"services"} style={{marginLeft:isMobile?ColSize+20:ColSize,marginRight:isMobile?0:20 }}>
                <div className={isMobile?"heading-mobile" : "heading"}>Contact Us</div>

                <div className={isMobile?"contact-info-mobile": "contact-info"}>
                    <FaRegEnvelope  size={isMobile?16:18} color="white"  className={isMobile?"icon-mobile":"icon"} />
                    <p className={isMobile? "text-mobile": "text-web"}  >{isMobile?"ownim.corporation\n@gmail.com":FooterContent.email}</p>
                </div>
    
                <div className={isMobile?"contact-info-mobile": "contact-info" } >
                    <IoCallOutline size={isMobile?16:18} color="white" className={isMobile?"icon-mobile":"icon"} />
                    <p className={isMobile? "text-mobile": "text-web"}  >{FooterContent.number}</p>
                </div>
                <div className={isMobile?"contact-info-mobile": "contact-info"}>
                    <PiBuildingOfficeThin size={isMobile?16:18} color="white"  className={isMobile?"icon-mobile":"icon"} />
                    <p className={isMobile? "text-mobile": "text-web"}>{FooterContent.site}</p>
                </div>
                </div>

            </div>

            <div  style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <div className={isMobile?"heading-mobile " : "heading-web"}  style= {{marginTop:14,marginRight:10}}>{FooterContent.followUsTxt}</div>
                <div className="follow-us">
                    <AiOutlineFacebook size={18} color="white" onClick={()=>router.push(`https://www.facebook.com/profile.php?id=100066951983156`)} />
                    <FaInstagram size={18} color="white"  />
                    <FaSquareTwitter size={18} color="white" />
                    <CiLinkedin size={18} color="white" onClick={()=>router.push("http://www.linkedin.com/in/ownim-corporation-612b4631a")}  /> 
                </div>
            </div>
        </div>
    );
}
