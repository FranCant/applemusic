"use client";
import Image from "next/image";
import Link from "next/link";

export default function Card({ pods }) {
  return (
    <>
      {pods.map((pod) => (
        <Link
          key={pod.id.attributes["im:id"]}
          href={`podcast/${pod.id.attributes["im:id"]}`}
        >
          <li className="relative flex items-end justify-center rounded-sm h-44 w-full sm:w-72 md:w-60 shadow-xl m-auto scale-100 active:drop-shadow-md hover:drop-shadow-md hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
            <div className="absolute inset-x-auto -top-[25%] overflow-hidden rounded-full w-36 h-36 shadow-xl">
              <Image
                src={pod["im:image"][2].label}
                // fill={true}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4 space-y-1 text-center">
              <p className=" font-semibold uppercase text-base">
                {pod["im:name"].label.split(" ").slice(0, 4).join(" ")}
              </p>
              <p className="font-normal text-gray-400 text-xs w-full">
                {`Author: ${pod["im:artist"].label
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}`}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
