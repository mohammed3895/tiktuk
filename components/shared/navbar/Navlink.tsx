import { buttonVariants } from "@/components/ui/button";
import { NAVITEMS } from "@/constants/headerItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface ItemProps {
  item: (typeof NAVITEMS)[number];
}

const Navlink = ({ item }: ItemProps) => {
  return (
    <Link
      href={item.href}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full flex gap-2 capitalize"
      )}
    >
      <item.icon className="w-5 h-5 text-primary" />
      {item.name}
    </Link>
  );
};

export default Navlink;
