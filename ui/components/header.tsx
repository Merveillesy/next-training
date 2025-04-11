import Link from "next/link";
import { Nav } from "@/ui/components/nav";
import { LinkInterface } from "@/lib/interface";

const links: LinkInterface[] = [
  { label: "Home", href: "/" },
  { label: "Tasks", href: "/tasks", subHref: ["/tasks/dones"] },
  { label: "About", href: "/about" },
];

export const Header = () => {
  console.log("header");
  return (
    <div className="flex flex-col gap-2 bg-blue-500  font-bold text-1xl px-5">
      <div className="text-3xl uppercase">Training next js</div>
      <Nav links={links} />
    </div>
  );
};
