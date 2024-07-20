"use client";

import Link from "next/link";

//icons
import {
  House,
  FileClock,
  Settings,
  Library,
  Bookmark,
  User,
  Waves,
  LayoutPanelTop,
  LibraryBig,
  Menu,
  Bot,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { href: "/home", label: "Home", icons: <House /> },
  { href: "#abcd", label: "History", icons: <FileClock /> },
  { href: "#abcd", label: "Agent", icons: <Bot /> },
  { href: "#noprograms-for-now", label: "Programs", icons: <Library /> },
  { href: "#abcd", label: "Content", icons: <LayoutPanelTop /> },
  // { href: "#abcd", label: "Profile", icons: <User /> },
  { href: "#abcd", label: "Settings", icons: <Settings /> },
];

const clss_active =
  "block my-2 py-5 px-4 bg-primary rounded text-white font-bold flex gap-2 justify-start items-center";
const clss =
  "block my-2 py-5 px-4 hover:bg-primary/10 rounded flex gap-2 justify-start items-center";

export function SideBar() {
  const path = usePathname();

  return (
    <aside className="w-[15vw] h-full bg-secondary-foreground text-white flex-shrink-0">
      <div className="p-4 flex h-full w-full flex-col justify-between">
        <div className="h-[6em] flex justify-center gap-2 items-center">
          <LibraryBig className="text-primary scale-x-[-1]" size={40} />
          <h1 className="text-2xl font-semibold">KNexus</h1>
        </div>
        <ul className="mt-4 h-full">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={path == link.href ? clss_active : clss}
              >
                {link.icons}
                <Label>{link.label}</Label>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function MobileSideBar() {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button className="pl-1" variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="h-screen w-full">
        <aside className="w-full h-full absolute left-0 top-0 bg-secondary-foreground text-white flex-shrink-0">
          <div className="p-4 flex h-full w-full flex-col justify-between">
            <div className="h-[6em] flex justify-center gap-2 items-center">
              <LibraryBig className="text-primary scale-x-[-1]" size={40} />
              <h1 className="text-2xl font-semibold">KNexus</h1>
            </div>
            <ul className="mt-4 h-full">
              {links.map((link) => (
                <li key={link.label}>
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className={path == link.href ? clss_active : clss}
                    >
                      {link.icons}
                      <Label>{link.label}</Label>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
}

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://highland.bank/wp-content/uploads/Female-Student-1600x1067.jpg"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
