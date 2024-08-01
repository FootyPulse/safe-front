import { Button } from "@/components/ui/button";
import Link from "next/link";

type navitem = {
  href: string;
  value: string;
  borderColor?: string;
  hover?: string;
};

export default function NavItem({ href, value, hover, borderColor }: navitem) {
  return (
    <Button
      variant="outline"
      className={`${borderColor} mr-2 w-24 ${hover} rounded-lg border-2 text-slate-600`}
      asChild
    >
      <Link className=" text-slate-600" href={href}>
        {value}
      </Link>
    </Button>
  );
}
