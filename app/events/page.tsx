import React from "react";

/*
    This page displays upcoming events at the zoo.

    Last modified by: An Luu (08/10/2026)
*/

export default function EventsPage() {
  const events = [
    {
      title: "Lion Feeding",
      date: "Monday - Friday",
      time: "11:00 AM",
      location: "Savanna Exhibit",
      description:
        "Watch our African lions during feeding time and learn about their diet and behavior.",
    },
    {
      title: "Meet the Meerkats",
      date: "Wednesday & Saturday",
      time: "2:30 PM",
      location: "Savanna Exhibit",
      description:
        "Meet our meerkats and learn how these social animals live and work together.",
    },
    {
      title: "Rainforest Animal Talk",
      date: "Tuesday & Thursday",
      time: "1:00 PM",
      location: "Rain Forest Exhibit",
      description:
        "Learn about the animals that live in tropical rain forests and how they survive.",
    },
    {
      title: "Polar Animal Showcase",
      date: "Friday - Sunday",
      time: "4:00 PM",
      location: "Polar Exhibit",
      description:
        "Learn about Arctic wolves, snowy owls, sea otters, and other cold-weather animals.",
    },
    {
      title: "Swamp Discovery",
      date: "Saturday & Sunday",
      time: "12:30 PM",
      location: "Swamp Exhibit",
      description:
        "Discover alligators, beavers, platypuses, and other animals that live in wetlands.",
    },
    {
      title: "Night at the Zoo",
      date: "Saturday",
      time: "7:00 PM",
      location: "Main Zoo Entrance",
      description:
        "Explore the zoo after dark and discover how animal behavior changes at night.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-8 py-10">
      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-700">
          Zoo Events
        </h1>

        <h2 className="text-2xl font-semibold text-orange-500 mt-2">
          There&apos;s always something happening at the zoo!
        </h2>

        <p className="text-gray-700 mt-4 text-lg">
          Check out our feeding times, animal talks, and special events.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.title}
            className="
              bg-white
              border-2
              border-green-700
              rounded-xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              hover:scale-105
              transition-transform
              duration-300
            "
          >
            <div className="bg-green-700 text-white px-5 py-4">
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>
            </div>

            <div className="p-5">
              <div className="mb-3">
                <p className="font-bold text-orange-500">
                  Date
                </p>
                <p>{event.date}</p>
              </div>

              <div className="mb-3">
                <p className="font-bold text-orange-500">
                  Time
                </p>
                <p>{event.time}</p>
              </div>

              <div className="mb-3">
                <p className="font-bold text-orange-500">
                  Location
                </p>
                <p>{event.location}</p>
              </div>

              <p className="text-gray-700 mt-4">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}