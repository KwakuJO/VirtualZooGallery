import React from "react";
import AnimalCards from "../components/AnimalCards";

/*
    This is the page that shows all the animals. This page
    will be visited by all those curious to see what is
    at the zoo. It should take data from the database and
    display basic information (name, habitat, image in
    form of URI) to the visitor so they know what animal
    they're looking at

    Last modified by: Kwaku Otchere
    Last modified by: An Luu 08/08/2026
*/

export default function AllAnimals() {
    const animals = [
        {
            name: "African Lion",
            habitat: "Savanna",
            uri: "https://aquilasafari.com/wp-content/uploads/2025/12/image-54-300x201.png",
        },
        {
            name: "Alligator",
            habitat: "Swamp",
            uri: "https://tse1.mm.bing.net/th/id/OIP.kPopJ0rqi5F_iOBXDpTxwwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
            name: "Arctic Wolf",
            habitat: "Polar",
            uri: "https://th.bing.com/th/id/R.ac707bf93aa0c61c4cb7e2c742feb51c?rik=NcoBIwzJwmC9vw&pid=ImgRaw&r=0",
        },
        {
            name: "Beaver",
            habitat: "Swamp",
            uri: "https://tse4.mm.bing.net/th/id/OIP.k2msxXUXc_PbcaSbMr87IwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
            name: "Black Panther",
            habitat: "Rain Forest",
            uri: "https://tse3.mm.bing.net/th/id/OIP.5pfRfD9kNKpwYiqe0xzqDQHaEQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
            name: "Vulture",
            habitat: "Savanna",
            uri: "https://www.treehugger.com/thmb/FcryrteVLDU1pTpU0FiqE0f3_xo=/5120x0/filters:no_upscale():max_bytes(150000):strip_icc()/nubian-vulture-522613486-c8949af3df004fb494ceb991925987ff.jpg",
        },
        {
            name: "Meerkat",
            habitat: "Savanna",
            uri: "https://vignette.wikia.nocookie.net/zawa-mod/images/e/e8/Fateofmeerka.jpg/revision/latest/scale-to-width-down/2000?cb=20200318215727",
        },
        {
            name: "Platypus",
            habitat: "Swamp",
            uri: "https://image.pbs.org/video-assets/RbbeLAc-asset-mezzanine-16x9-kfeaK7I.jpg?crop=1920x1080&format=jpg",
        },
        {
            name: "Sea Otter",
            habitat: "Polar",
            uri: "https://www.animalspot.net/wp-content/uploads/2022/01/Sea-Otter.jpg",
        },
        {
            name: "Snowy Owl",
            habitat: "Polar",
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPaxm3lNISueljv_0CutZZJY3dpCiCXUbFnWv2rKXzg&s=10",
        },
        {
            name: "Toucan",
            habitat: "Rain Forest",
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBQHVRwoAY_q7dqDUGHvTGchpFcMYkgYa0qXcV9RJbA&s=10",
        },
        {
            name: "Tree Frog",
            habitat: "Rain Forest",
            uri: "https://cdn.hswstatic.com/gif/shutterstock-2559217813.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-white py-8 px-16 text-black">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-green-600">
                    Welcome to the Jungle!
                </h1>

                <h2 className="text-2xl font-semibold text-orange-500 mt-2">
                    Discover the amazing animals at our zoo!
                </h2>

                <p className="mt-4 text-gray-700">
                    Press on an animal card to learn more about them.
                </p>
            </div>

            <section className="w-full flex flex-row flex-wrap gap-5 justify-center">
                {animals.map((animal) => (
                    <AnimalCards
                        key={animal.name}
                        name={animal.name}
                        habitat={animal.habitat}
                        uri={animal.uri}
                    />
                ))}
            </section>
        </div>
    );
}
