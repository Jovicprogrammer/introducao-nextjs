
import Image from "next/image"
import Link from "next/link";
import React from "react";

interface NavBarProps {
  links: {
    label:string;
    href:string;
  }[]
};


export default function Navbar({links}: NavBarProps) {


    return (

      <nav className="bg-blue-950 shadow-sm text-white">
        <div className="px-4 py-3">
          <div className="flex justify-between h-14 items-center ">

        {/* Logo */}
        <Link href='/'>
        <div className="flex items-center"> 
        
          <Image
          src="/nextjslogo.png"
          alt="nextjs logo "
          height={70}
          width={70}
          className=" "
          />
        
        <span className="ml-2">NextJs</span>
        </div>
        </Link>

        {/* Links */}
        <div className="flex space-x-4">
        
         {
          links.map((link, indice) => (
            <a key={indice} href={link.href}>
              {link.label}
            </a>
          ))
         }

        </div>
          </div>
        </div>
      </nav>

    )

}