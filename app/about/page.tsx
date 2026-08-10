import React from "react";

/*
    Welcome to the About the Zoo page of our Virtual Zoo Gallery.
    This page will explain the purpose of the zoo and what visitors are 
    expected to see on the website.

    Last modified by: An Luu (08/10/2026)
*/

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Main Header */}
      <section className="text-center px-8 py-16">
        <h1 className="text-5xl font-bold text-green-700">
          About the Zoo
        </h1>

        <h2 className="text-2xl font-semibold text-orange-500 mt-3">
          Explore. Discover. Learn.
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-700 leading-relaxed">
          Welcome to the Virtual Zoo Gallery, a place where visitors can
          discover amazing animals, learn about their habitats, and explore
          the different experiences our zoo has to offer.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-green-50 px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
            Our Mission
          </h2>

          <p className="text-center text-lg text-gray-700 leading-relaxed">
            Our goal is to create an enjoyable and educational experience
            where visitors can learn more about animals from different
            environments around the world. The Virtual Zoo Gallery makes it
            easy to explore animals, discover their habitats, and learn
            interesting information about wildlife.
          </p>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="px-8 py-14">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          What Can You Do Here?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Animals */}
          <div
            className="
              border-2
              border-green-700
              rounded-xl
              p-6
              text-center
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Discover Animals
            </h3>

            <p className="text-gray-700">
              Browse our animal gallery and discover animals from the
              savanna, rainforest, polar regions, swamps, and more.
            </p>
          </div>

          {/* Learn */}
          <div
            className="
              border-2
              border-green-700
              rounded-xl
              p-6
              text-center
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Learn About Wildlife
            </h3>

            <p className="text-gray-700">
              Learn about where different animals live and discover
              interesting information about their lives and environments.
            </p>
          </div>

          {/* Events */}
          <div
            className="
              border-2
              border-green-700
              rounded-xl
              p-6
              text-center
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Explore Zoo Events
            </h3>

            <p className="text-gray-700">
              Check out animal feedings, educational talks, special
              showcases, and other events happening around the zoo.
            </p>
          </div>

        </div>
      </section>

      {/* Habitats */}
      <section className="bg-orange-50 px-8 py-12">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Explore Different Habitats
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-green-700 text-white px-6 py-3 rounded-full">
            Savanna
          </div>

          <div className="bg-green-700 text-white px-6 py-3 rounded-full">
            Rain Forest
          </div>

          <div className="bg-green-700 text-white px-6 py-3 rounded-full">
            Polar
          </div>

          <div className="bg-green-700 text-white px-6 py-3 rounded-full">
            Swamp
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="text-center px-8 py-16">
        <h2 className="text-3xl font-bold text-orange-500">
          Welcome to the Virtual Zoo Gallery!
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
          Whether you are here to discover a new animal, learn something
          interesting, or see what is happening at the zoo, there is always
          something new to explore.
        </p>
      </section>

    </main>
  );
}