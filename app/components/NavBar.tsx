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
    <nav className="w-full bg-green-700 flex items-center justify-around border-b-7 border-solid border-green-900 text-white">
        <Link href="/" className="hover:bg-green-600 py-5 flex-1 text-center">
            Home
        </Link>  
        <Link href="/allanimals" className="hover:bg-green-600 py-5 flex-1 text-center">
            All Animals
        </Link>  
        <Link href="/events" className="hover:bg-green-600 py-5 flex-1 text-center">
            Events
        </Link>  
        <Link href="/about" className="hover:bg-green-600 py-5 flex-1 text-center">
            About the Zoo
        </Link>  
    </nav>
  );
}
