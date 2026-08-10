import React from "react";
import Link from "next/link";

/*
    This Navbar links to the main pages of the
    Virtual Zoo Gallery.

    Last modified by: Kwaku Otchere
    Last modified by: An Luu (08/10/2026)
*/

export default function NavBar() {
  return (
    <nav className="w-full bg-green-700 text-white flex items-center justify-around">
      <Link
        href="/"
        className="p-5 hover:bg-green-600 transition-colors"
      >
        Home
      </Link>

      <Link
        href="/allanimals"
        className="p-5 hover:bg-green-600 transition-colors"
      >
        All Animals
      </Link>

      <Link
        href="/events"
        className="p-5 hover:bg-green-600 transition-colors"
      >
        Events
      </Link>

      <Link
        href="/about"
        className="p-5 hover:bg-green-600 transition-colors"
      >
        About the Zoo
      </Link>
    </nav>
  );
}
