"use client";
import React, { useMemo, useState } from "react";
import Card from "./Card";

export default function PodcastList({ data }) {
  const [query, setQuery] = useState("");

  const search = (val) => {
    const filterData = val.filter(
      (pod) =>
        pod["im:name"].label.toLowerCase().includes(query) ||
        pod["im:artist"].label.toLowerCase().includes(query)
    );

    return filterData;
  };
  const podcastMemo = useMemo(() => search(data), [query]);
  return (
    <>
      <div className="flex items-center justify-end py-6 space-x-2">
        <div className="flex items-center ">
          <span className="px-1 bg-sky-500 rounded-md font-bold text-white">
            {podcastMemo.length}
          </span>
        </div>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full md:w-80 appearance-none leading-normal"
          type="text"
          placeholder="Filter Podcasts..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {podcastMemo.length === 0 && (
        <div className="-mt-20">Not Podcast to show you...</div>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-14 lg:gap-y-32 lg:gap-x-12  ">
        <Card pods={podcastMemo} />
      </ul>
    </>
  );
}
