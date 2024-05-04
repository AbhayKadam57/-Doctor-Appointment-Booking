import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const Menu = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Explore",
      path: "/expolre",
    },
    {
      id: 0,
      name: "About",
      path: "/about",
    },
  ];

  return (
    <div className="flex items-center justify-between gap-10 p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li
                className="hover:text-primary font-semibold hover:scale-105 hover:cursor-pointer transition-all ease-in-out"
                key={index}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
