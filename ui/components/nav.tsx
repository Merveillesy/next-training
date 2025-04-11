"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInterface } from "@/lib/interface";
import clsx from "clsx";

interface NavPropsInterface {
  links: LinkInterface[];
  shape?: "inline" | "block";
}

export const Nav = ({ links, shape }: NavPropsInterface) => {
  const path = usePathname();
  const isBlock = shape && shape === "block";
  return (
    <div
      className={clsx("flex gap-3", {
        "flex-col": isBlock,
      })}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={
            path === link.href || link?.subHref?.includes(path)
              ? "border-b-3 w-[max-content]"
              : ""
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
