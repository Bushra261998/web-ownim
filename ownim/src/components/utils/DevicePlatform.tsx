"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";

interface Props{
  children:React.ReactNode;
}

const ctx = createContext(false);

export default function IsMobileDevice({children}:Props) {
  const [device, setDevice] = useState(false);
  useEffect(() =>{

    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type?result.device.type:"");
    setDevice(isMobileDevice);
  }  , []);

  return (
    <ctx.Provider value={device}>{children}</ctx.Provider>
  );
}

export function useIsMobile() {
  return useContext(ctx);
}