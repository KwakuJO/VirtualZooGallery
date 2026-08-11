import React from 'react'

export default function RectangleTextBox({title, text}: {title: string, text: string}) {
  return (
    <div className="bg-orange-400 flex-1 h-90 border-solid border-orange-700 border-3 rounded-2xl text-white p-4 flex-col flex justify-center">
        <h1 className='font-bold italic text-5xl'>{title}</h1>
        <p className="p-2 text-lg">{text}</p>
    </div>
  )
}
