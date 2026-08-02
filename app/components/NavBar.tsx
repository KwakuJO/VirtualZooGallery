import React from 'react'
import Link from 'next/link'
{/* 
    This Navbar currently only goes to Home page and
    allanimals page (Modify This if needed)
    
    Last modified by: Kwaku Otchere
    
*/}
export default function NavBar() {
  return (
    <nav className="w-full bg-gray-400 flex items-center justify-around">
        <Link href="/" className="hover:bg-gray-300 p-5">
            Home
        </Link>  
        <Link href="/allanimals/" className="hover:bg-gray-300 p-5">
            All Animals Page
        </Link>  
        <Link href="" className="hover:bg-gray-300 p-5">
            Option 3
        </Link>  
        <Link href="" className="hover:bg-gray-300 p-5">
            Option 4
        </Link>  
    </nav>
  )
}
