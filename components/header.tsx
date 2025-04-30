import Link from "next/link";
import NavBar from "./navBar";
import MobileNav from "./mobileNav";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop nav & hire me */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-8">
            <NavBar textSize="md" />
          </nav>
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
