import Image from "next/image";
import Link from "next/link";

const handleFetch = async () => {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await res.json();
  const podcasts = data.feed.entry;
  return podcasts;
};

export default async function CardDetail({ podcast = [] }) {
  const data = await handleFetch();
  const mapPodcast = podcast.map((el) => el.collectionId).slice(0, 1);

  const filterArtist = data?.find(
    (el) => el.id?.attributes["im:id"] == mapPodcast
  );

  return (
    <div className="w-full flex justify-start md:w-64">
      <div className="md:block grid grid-cols-4 md:grid-cols-3 w-full rounded-lg bg-white p-8 shadow-lg">
        <Link href={`/podcast/${mapPodcast}`} className="col-span-4 md:col-span-1 flex md:flex-col max-md:space-x-4">
          <div className="relative md:w-52 w-28 h-28 md:h-60 col-span-1 flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src={filterArtist["im:image"][2].label}
              width={500}
              height={500}
              // fill
              className=""
              alt="Podcast Artist"
            />
          </div>
          <div className="flex flex-col col-span-1 items-start justify-center py-5 my-5 border-y-2">
            <h5 className="text-base font-bold text-neutral-800 ">
              {filterArtist["im:name"].label}
            </h5>
            <p className="text-sm font-normal text-neutral-600 italic tracking-tighter	">
              by {filterArtist["im:name"].label}
            </p>
          </div>
        </Link>
        <div className="col-span-4">
          <h5 className="text-sm font-semibold">Description:</h5>
          <p className="text-sm font-normal italic whitespace-wrap break-words">
            {filterArtist.summary.label}
          </p>
        </div>
      </div>
    </div>
  );
}
