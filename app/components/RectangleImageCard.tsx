import React from 'react'

export default function RectangleImageCard({altText, image = "/"}: {altText: string, image?: string}) {
  return (
    <div className='w-70 h-90 border-solid border-orange-700 border-3 rounded-2xl flex justify-center'>
        <p className='absolute bg-white/75 rounded-b-lg p-1'>{altText}</p>
        <img src={image} alt={altText} className='rounded-xl w-full h-full object-cover'/>
    </div>
  )
}
