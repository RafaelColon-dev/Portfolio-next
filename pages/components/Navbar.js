import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </div>
  );
}
