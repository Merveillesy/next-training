import Link from "next/link";

export const Header = () => {
  console.log("header");
  return (
    <div className="flex gap-2">
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/about">About</Link>
    </div>
  );
};
