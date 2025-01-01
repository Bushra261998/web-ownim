"use client"
import React from "react";
import Footer from "../../components/utils/Footer";
import { ContactUsContent } from "../../components/utils/ScreensContent";
import ContactCard from "../../components/utils/ContactCard";
import styles from "../../styles/ContactUsScreen.module.css"; // Custom CSS module
import useWindowSize from "@/components/utils/WindowSize";
import Image from "next/image";
import '../../styles/AboutScreen.css';
import { useIsMobile } from "@/components/utils/DevicePlatform";

export default function ContactUsScreen() {
  const isMobile = useIsMobile();
  const size = useWindowSize().height-555;
  return (
    <div>
    <div className={styles.container}>
      <div >
        <div >
          <div className={styles.header}>
            <h1 className={styles.headerText1}>{ContactUsContent.heading1}</h1>
            <h1 className={styles.headerText2}>{ContactUsContent.heading2}</h1>
          </div>
          <div className={styles.line} />
          <p className={styles.txt}>{ContactUsContent.contactUsTxt}</p>
          <div  style={{height:'30%', backgroundColor:'lightblue',  display:'flex', flexDirection:'row', justifyContent:'space-between',marginTop:30, marginBottom:isMobile?0:20, width:'100%'}} >
            
            <div style={{padding:13, paddingTop:isMobile?30:80, width:isMobile?'100%':'70%'}} >
            <ContactCard colorTheme={{ textColor: "navy" }} />
            </div>
            
           {!isMobile && <Image src={"/contact.png"}  alt="contact" width={400} height={150}  style={{padding:10,  }} />}

          </div>
          {isMobile && <Image src={"/contact.png"}  alt="contact" width={400} height={150}  style={{width:'100%', height:290, marginBottom:20 }} />}
        </div>
        
      </div>
    </div>
    <div><Footer /></div>
    
    </div>
  );
}
