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
          <nav role="navigation" aria-label="Mobile Navigation Menu" className="flex gap-8">
            <NavBar textSize="md" />
          </nav>
          <Link
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=abdallaelhgar@gmail.com&su=Job Opportunity for Frontend Developer&body=Hi Abdallah,%0A%0AWe came across your portfolio and we're interested in offering you a position.%0A%0ARegards,%0A[Your Company Name]`}
      passHref
      target="_blank"
    >
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
