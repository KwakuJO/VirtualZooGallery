import React from "react";
import AnimalCards from "../components/AnimalCards";
import { animals } from "../data/animals";

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
    return (
        <div className="min-h-screen bg-yellow-50 py-8 px-16 text-black">
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
