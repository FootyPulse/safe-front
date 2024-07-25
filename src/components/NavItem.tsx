import { Button } from "@/components/ui/button";

type navitem = {
  href?: string;
  value: string;
};

export default function NavItem({ href, value }: navitem) {
  return (
    <div>
      <Button className="mr-2 w-24 bg-slate-500 hover:bg-slate-700">
        {value}
      </Button>
    </div>
  );
}
