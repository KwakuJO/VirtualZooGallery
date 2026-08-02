import React from 'react'

{/* 
    This page takes the information of the AnimalCard 
    that was clicked and outputs it
    (Modify this page)

    Last modified by: Kwaku Otchere
    
*/}
export default async function page({ params }: {params: any}) {

    // Modify this site
    const variables = await params;
    const {animal} = variables;

    return (
        <div>
            {animal}
        </div>
    );
}
