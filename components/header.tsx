import Link from "next/link";
import NavBar from "./navBar";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-sans">
            Abdalla<span className="text-main">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me */}
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
          <Link href={"/contact"}>
            <button>Hire me</button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">mobile</div>
      </div>
    </header>
  );
}
