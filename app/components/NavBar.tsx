import React from 'react'
import Link from 'next/link'
{/* 
    This Navbar currently only goes to Home page and
    allanimals page (Modify This if needed)
    
    Last modified by: Kwaku Otchere
    
*/}
export default function NavBar() {
  return (
    <nav className="w-full bg-green-700 flex items-center justify-around border-b-7 border-solid border-green-900 text-white">
        <Link href="/" className="hover:bg-green-600 py-5 flex-1 text-center">
            Home
        </Link>  
        <Link href="/allanimals/" className="hover:bg-green-600 py-5 flex-1 text-center">
            All Animals Page
        </Link>  
        <Link href="" className="hover:bg-green-600 py-5 flex-1 text-center">
            Option 3
        </Link>  
        <Link href="" className="hover:bg-green-600 py-5 flex-1 text-center">
            Option 4
        </Link>  
    </nav>
  )
}
