import React from 'react'

export default function RectangleTextBox({text}: {text: string}) {
  return (
    <div className="bg-blue-200 flex-1 h-100 border-solid border-black border-3 rounded-2xl">
        <p>{text}</p>
    </div>
  )
}
