import { IoMenu } from "react-icons/io5";
import Logo from "../../public/images/sixt-logo.png"
import Image from "next/image"
import { menuLinks } from "@/constant";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">
        <IoMenu className="text-2xl text-white cursor-pointer hover:scale-125 transition-all" />
        <Image src={Logo} alt='Logo' width={70} />
      </div>
      <ul className="flex items-center gap-4">    
       {menuLinks.map((link) => (
          <li key={link.label} className="hidden md:flex items-center gap-2 font-bold text-white">
            <link.icon className="text-2xl" />
            <a href="#">{link.label}</a>
          </li>
       ))}   
       <li>
        <UserButton/>
       </li>
      </ul>
    </div>
  )
}