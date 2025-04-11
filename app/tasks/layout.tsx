import { PropsWithChildren } from "react";
import { LinkInterface } from "@/lib/interface";
import { Nav } from "@/ui/components/nav";

const links: LinkInterface[] = [
  { label: "All tasks", href: "/tasks" },
  { label: "Dones", href: "/tasks/dones" },
];

export default function TasksLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <div className="grid grid-cols-[25%_auto] h-full">
        <div className="flex flex-col bg-neutral-800 pl-2">
          <div className="font-bold text-2xl mt-2">Tasks page</div>
          <div className="mt-5 pl-2">
            <Nav links={links} shape={"block"} />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
