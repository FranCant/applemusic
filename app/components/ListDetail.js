"use client";

import { formatTime } from "../helpers/formatTime";
import { formatDate } from "../helpers/formatDate";
import Link from "next/link";

export default function ListDetail({ podcast }) {
  return (
    <div className="flex-2 w-full">
      <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 capitalize border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {podcast.map((el) => (
              <tr key={el.trackId} className="bg-white border-b font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 text-sky-500 whitespace-wrap"
                >
                  <Link
                    href={
                      el.artistId
                        ? `podcast/${el.artistId}/episode/${el.trackId}`
                        : `podcast/${el.collectionId}/episode/${el.trackId}`
                    }
                  >
                    {el.trackName}
                  </Link>
                </th>

                <td className="px-6 py-4">{formatDate(el.releaseDate)}</td>
                <td className="px-6 py-4">{formatTime(el.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
