import React from "react";
import Link from "next/link";

/*
    AnimalCards.tsx gets information from the "database"
    (name, habitat, uri of the image to be used) and shows
    a very simple card to the visitor of the website

    Last modified by: Kwaku Otchere
    Last modified by: An Luu (08/08/2026)
*/

export default function AnimalCards({
  name,
  habitat,
  uri,
}: {
  name: string;
  habitat: string;
  uri?: string;
}) {
  let pageLink: string = "/allanimals/";

  if (new RegExp(/\s/).test(name)) {
    pageLink += name.replace(/\s+/g, "_");
  } else {
    pageLink += name;
  }

  return (
    <Link
      href={pageLink}
      className="
        flex flex-col
        w-64
        transition-transform duration-250
        hover:scale-105
      "
    >
      <div className="flex flex-row items-center gap-2 mb-2">
        <h2
          className="
            bg-green-700
            text-white
            font-bold
            text-lg
            px-3
            py-1
            rounded-md
          "
        >
          {name}
        </h2>

        <h3
          className="
            bg-orange-500
            text-white
            font-medium
            text-lg
            px-3
            py-1
            rounded-md
          "
        >
          {habitat}
        </h3>
      </div>

      <div
        className="
          relative
          w-full
          h-40
          border-2
          border-black
          rounded-xl
          overflow-hidden
          hover:shadow-lg
        "
      >
        <img
          src={
            uri
              ? uri
              : "https://th.bing.com/th/id/R.4fec58c0a98a8df7b2586332a591cccd?rik=Qt6aVRWl16qN6A&pid=ImgRaw&r=0"
          }
          alt={"Image Of " + name}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}
