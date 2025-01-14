"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';

const Links = [
  {
    name: "register",
    href: "/register",
  },
  {
    name: "login",
    href: "/login",
  },
  {
    name: "forget-password",
    href: "/forget-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <div>
      <ul className="flex gap-5 p-5">
        {Links.map((link) => {

          const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== '/' );
          return (
            <li  key={link.name}>
              <Link className={` ${isActive ? 'font-semibold text-black' : 'text-blue-600'}`} href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};
