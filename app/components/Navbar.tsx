"use client";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 p-4  text-white">
        <ul className="flex justify-center gap-10 font-sans font-bold">
          <li>
            <h1>
                
              <Link href="/">Home</Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/about">About</Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/gallery">Gallery</Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/contact">Contact</Link>
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
