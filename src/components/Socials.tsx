import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Socials = () => {
  return (
        <div className="text-3xl font-mono mt-4 flex justify-between lg:w-[15vw] bg-teal-900 rounded-full p-2 px-4 w-44">
            <a className="hover:cursor-pointer image-button" href="https://www.instagram.com/achintya_nigam/?hl=en"><FaSquareInstagram size={40}/></a>
            <a className="hover:cursor-pointer image-button" href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"><FaLinkedin size={40}/></a>
            <a className="hover:cursor-pointer image-button" href="https://x.com/achintyawrites"><FaSquareXTwitter size={40}/></a>
        </div>
  );
}
export default Socials;
        