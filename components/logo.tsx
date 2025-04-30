import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-4xl font-sans">
        Abdalla<span className="text-main">.</span>
      </h1>
    </Link>
  );
}
