import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  title: string;
  icon: ReactNode;
  href: string;
};

export default function NavItem({ title, icon, href }: NavItemProps) {
  return (
    <Link href={href}>
      <div className="p-6 text-lg flex items-center">
        {icon}
        <h1 className="ml-2">{title}</h1>
      </div>
    </Link>
  );
}
