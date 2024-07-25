import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import logo from "@/../public/logo.png";
import Image from "next/image";
import { UserAvatar } from "./UserAvatar";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex p-4 justify-between w-full items-center border-b-2 border-black">
      <div className="flex items-center">
        <Image className="mr-2" src={logo} alt="logo" height={60} />
      </div>
      <div className="flex">
        <NavItem href="/home" value="Home" />
        <NavItem href="/live" value="Live" />
        <UserAvatar />
      </div>
    </div>
  );
}
