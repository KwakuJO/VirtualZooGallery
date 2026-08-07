'use client';
import React from 'react'
import AnimalCards from '../components/AnimalCards'

{/*
    This is the page that shows all the animals. This page
    will be visited by all those curious to see what is
    at the zoo. It should take data from the database and
    display basic information (name, habitat, image in 
    form of URI) to the visitor so they know what animal 
    they're looking at

    Last modified by: Kwaku Otchere

*/}

export default function AllAnimals() {

    const animals = [
        {name: "African Lion", habitat: "Savanna", uri: "https://aquilasafari.com/wp-content/uploads/2025/12/image-54-300x201.png"},
        {name: "Alligator", habitat: "Swamp", uri: "https://tse1.mm.bing.net/th/id/OIP.kPopJ0rqi5F_iOBXDpTxwwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {name: "Arctic Wolf", habitat: "Polar", uri: "https://th.bing.com/th/id/R.ac707bf93aa0c61c4cb7e2c742feb51c?rik=NcoBIwzJwmC9vw&pid=ImgRaw&r=0"},
        {name: "Beaver", habitat: "Swamp", uri: "https://tse4.mm.bing.net/th/id/OIP.k2msxXUXc_PbcaSbMr87IwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {name: "Black Panther", habitat: "Rain Forest", uri: "https://tse3.mm.bing.net/th/id/OIP.5pfRfD9kNKpwYiqe0xzqDQHaEQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {name: "Vulture", habitat: "Savanna", uri: "https://www.treehugger.com/thmb/FcryrteVLDU1pTpU0FiqE0f3_xo=/5120x0/filters:no_upscale():max_bytes(150000):strip_icc()/nubian-vulture-522613486-c8949af3df004fb494ceb991925987ff.jpg"},
        {name: "Meerkat", habitat: "Savanna", uri: "https://vignette.wikia.nocookie.net/zawa-mod/images/e/e8/Fateofmeerka.jpg/revision/latest/scale-to-width-down/2000?cb=20200318215727"},
        {name: "Platypus", habitat: "Swamp", uri: "https://image.pbs.org/video-assets/RbbeLAc-asset-mezzanine-16x9-kfeaK7I.jpg?crop=1920x1080&format=jpg"},
        {name: "Sea Otter", habitat: "Polar", uri: "https://www.animalspot.net/wp-content/uploads/2022/01/Sea-Otter.jpg"},
        {name: "Snowy Owl", habitat: "Polar", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPaxm3lNISueljv_0CutZZJY3dpCiCXUbFnWv2rKXzg&s=10"},
        {name: "Toucan", habitat: "Rain Forest", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBQHVRwoAY_q7dqDUGHvTGchpFcMYkgYa0qXcV9RJbA&s=10"},
        {name: "Tree Frog", habitat: "Rain Forest", uri: "https://cdn.hswstatic.com/gif/shutterstock-2559217813.jpg"},
        
    ]; // This is a placeholder for the actual Database

  return (
    <div>
        <div className="h-40 bg-blue-200 w-full relative">
            <img src="https://tse1.mm.bing.net/th/id/OIP.hluXozT2-PbsYzBAYOEDtAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Image Of Zoo" className="absolute w-full object-cover h-full"/>
            <h1 className="text-4xl font-bold italic absolute m-2 p-1 bg-gray-50 rounded-2xl">
                    Here are our animals!
            </h1>
        </div>
        <div className="px-16">
            <div>
                <h2 className="text-2xl">
                    You'll be able to find all the animals at our zoo here!
                </h2>
            </div>

            <section className="w-full flex flex-row flex-wrap gap-4 justify-center py-4">
                <form onSubmit={(e) => {e.preventDefault();}} className='flex justify-items-center w-full gap-5'>
                    <select defaultValue="" onChange={() => {}} name="Amt Show" className='flex-1 bg-gray-200 border-black border-solid border-2 rounded-lg'>
                        <option value="" disabled>Amt Shown</option>
                        <option value="5">5 Shown</option>
                        <option value="10">10 Shown</option>
                    </select>

                    <input onChange={() => {}} type="text" placeholder="Search" className='flex-4 bg-gray-200 border-black border-solid border-2 rounded-lg text-center' />
                    
                    <select defaultValue="" onChange={() => {}} name="Filter" className='flex-1 bg-gray-200 border-black border-solid border-2 rounded-lg'>
                        <option value="" disabled>Filter</option>
                        <option value="Name">Name</option>
                        <option value="Habitat">Habitat</option>
                    </select>                
                </form>
            </section>
            
            <div className="w-full h-full flex flex-row flex-wrap gap-4 justify-center">
                {animals.map(o => (
                    <AnimalCards key={o.name} name={o.name} habitat={o.habitat} uri={o.uri}/>
                ) )}
            </div>
            <section className="h-120 flex no-wrap items-center gap-10">
                <div className="h-100 bg-blue-200 flex-1 border-2 border-solid border-black rounded-2xl">
                    <p>Text should go here describing stuff of the zoo</p>
                </div>
                <div className="h-100 w-70 bg-blue-800 border-2 border-solid border-black rounded-2xl relative">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.hluXozT2-PbsYzBAYOEDtAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Image Of Zoo Keeper" className="w-full h-full absolute rounded-xl"/>
                </div>
            </section>
        </div>
    </div>
  )
}
