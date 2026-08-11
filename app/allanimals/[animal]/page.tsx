import React from "react";
import Link from "next/link";
import { findAnimalBySlug } from "../../data/animals";

/*
    This page takes the animal slug from the URL and shows
    the full preview / info card for that animal.

    Last modified by: Kwaku Otchere
    Last modified by: An Luu (08/11/2026)
*/
export default async function AnimalPage({
  params,
}: {
  params: Promise<{ animal: string }>;
}) {
  const { animal: slug } = await params;
  const animal = findAnimalBySlug(slug);

  if (!animal) {
    return (
      <div className="min-h-screen bg-yellow-50 py-8 px-16 text-black text-center">
        <h1 className="text-3xl font-bold text-green-600">Animal not found</h1>
        <Link href="/allanimals" className="text-orange-500 underline mt-4 inline-block">
          Back to All Animals
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-8 px-16 text-black">
      <Link href="/allanimals" className="text-orange-500 underline">
        &larr; Back to All Animals
      </Link>

      <div className="max-w-3xl mx-auto mt-6">
        <div className="flex flex-row items-center gap-2 mb-1 justify-center">
          <h1 className="bg-green-700 text-white font-bold text-2xl px-3 py-1 rounded-md">
            {animal.name}
          </h1>
          <h2 className="bg-orange-500 text-white font-medium text-2xl px-3 py-1 rounded-md">
            {animal.habitat}
          </h2>
        </div>

        <p className="text-center italic text-gray-600 mb-4">
          {animal.scientificName}
        </p>

        <div className="relative w-full h-80 border-2 border-black rounded-xl overflow-hidden">
          <img
            src={animal.uri}
            alt={"Image Of " + animal.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <p className="text-gray-800 text-lg">{animal.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black rounded-xl p-4">
              <span className="font-bold text-green-700">Diet: </span>
              <span className="text-gray-800">{animal.diet}</span>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4">
              <span className="font-bold text-green-700">Weight: </span>
              <span className="text-gray-800">{animal.weight}</span>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4">
              <span className="font-bold text-green-700">Lifespan: </span>
              <span className="text-gray-800">{animal.lifespan}</span>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4">
              <span className="font-bold text-green-700">Conservation Status: </span>
              <span className="text-gray-800">{animal.conservationStatus}</span>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-4">
            <span className="font-bold text-orange-500">Fun Fact: </span>
            <span className="text-gray-800">{animal.funFact}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
