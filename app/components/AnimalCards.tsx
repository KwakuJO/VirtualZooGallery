import React from 'react'
import Link from 'next/link';

{/*
    AnimalCards.tsx gets information from the "database"
    (name, habitat, uri of the image to be used) and shows
    a very simple card to the visitor of the website 

    Last modified by: Kwaku Otchere

*/}
export default function AnimalCards({name, habitat, uri}: {name:string, habitat:string, uri?: string}) {
    // This code changes white space in some names for "_"
    // This is to not have "%20" in some web paths
    let pageLink: string = "/allanimals/";
    if (new RegExp(/\s/).test(name)) {
        pageLink += name.replace(/\s+/g, "_");
    } else {
        pageLink += name
    }

    return (
        <Link href={pageLink} className='
            transition-transform duration-250 transform hover:scale-110
            relative border-black border-3 rounded-2xl
            h-30 w-2/9 hover:shadow-md
            '>
            <div className="w-full h-full relative">
                <img 
                    src={uri ? uri: "https://th.bing.com/th/id/R.4fec58c0a98a8df7b2586332a591cccd?rik=Qt6aVRWl16qN6A&pid=ImgRaw&r=0"}
                    alt={"Image Of " + name}
                    className='right-0 w-full h-full object-cover rounded-xl'
                />
            </div>
            <div className="absolute top-0 rounded-xl p-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <h3 className="text-gray-500 italic">{habitat}</h3>
            </div>
        </Link>
    );
}
