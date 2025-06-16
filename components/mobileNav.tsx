"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./logo";
import NavBar from "./navBar";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger type="button" className="flex justify-center items-center" aria-label="Open mobile navigation menu">
        <CiMenuFries className="text-[32px] text-main" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-24 mb-28 text-center text-2xl">
          <Logo />
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          <NavBar textSize="xl" />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
