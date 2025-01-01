import React from 'react';
import { IoCall, IoMail } from 'react-icons/io5';
import { AiOutlineGlobal } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import styles from '../../styles/ContactCard.module.css';
import { ContactCardContent } from './ScreensContent';
import { useIsMobile } from './DevicePlatform';

function ContactCard({ colorTheme }:{colorTheme:{textColor:string}}) {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <h3 style={{ color: colorTheme.textColor }} className={styles.heading}>
        {ContactCardContent.heading}
      </h3>

      <div className={styles.contacts} style={{width:'100%'}} >
        
        <IoCall size={24} color={colorTheme.textColor} className={styles.icon}   />
        <div className={styles.desc}  style={{width:'50%'}} >
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.callLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.callValue}</p>
        </div>


        <div className={styles.iconWrapper}>
        <AiOutlineGlobal name="web" size={24} color={colorTheme.textColor}  className={styles.icon}  />
        </div>
        <div className={styles.desc} style={{width:'50%'}} >
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.webAddressLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.webAddressValue}</p>
        </div>
      </div>

      <div className={styles.contacts} style={{width:'100%'}} >
        <IoMail name="email" size={24} color={colorTheme.textColor} className={styles.icon} />
        <div className={styles.desc} style={{width:'50%'}} >
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.mailLabel}
          </p>
          <p className={styles.details} style={{width:20}} >{"ownim.corporation\n@gmail.com"}</p>
        </div>


        <div className={styles.iconWrapper}>
        <MdHome name="home" size={24} color={colorTheme.textColor} className={styles.icon} />
        </div>
        <div className={styles.desc}  style={{width:'50%'}} >
          <p style={{ color: colorTheme.textColor }} className={styles.iconName}>
            {ContactCardContent.addressLabel}
          </p>
          <p className={styles.details}>{ContactCardContent.addressValue}</p>
        </div>


      </div>
    </div>
  );
}

export default ContactCard;
