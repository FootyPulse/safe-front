import { Button } from "@/components/ui/button";

type navitem = {
  href?: string;
  value: string;
  borderColor?: string;
  hover?: string;
};

export default function NavItem({ href, value, hover, borderColor }: navitem) {
  return (
    <div>
      <Button
        variant="outline"
        className={`${borderColor} mr-2 w-24 ${hover} rounded-lg border-2`}
      >
        {value}
      </Button>
    </div>
  );
}
