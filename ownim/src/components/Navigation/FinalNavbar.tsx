"use client"
import React from 'react'
import { useIsMobile } from '../utils/DevicePlatform'
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

export default function FinalNavbar() {
const isMobile = useIsMobile();

  return (
      isMobile?<NavbarMobile/>:<Navbar/>
  )
}
