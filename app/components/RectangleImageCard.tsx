import React from 'react'

export default function RectangleImageCard({altText, image = "/"}: {altText: string, image?: string}) {
  return (
    <div className='bg-blue-200 w-70 h-100 border-solid border-black border-3 rounded-2xl'>
        <img src={image} alt={altText} className='rounded-xl'/>
    </div>
  )
}
