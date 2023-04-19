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
    <div className="flex justify-center w-64">
      <div className="block max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <Link href={`/podcast/${mapPodcast}`}>
          <div className="relative w-60 h-60 flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src={filterArtist["im:image"][2].label}
              width={500}
              height={500}
              // fill
              className=""
              alt="Podcast Artist"
            />
          </div>
          <div className="flex flex-col items-start justify-center py-5 my-5 border-y-2">
            <h5 className="text-base font-bold text-neutral-800 ">
              {filterArtist["im:name"].label}
            </h5>
            <p className="text-sm font-normal text-neutral-600 italic tracking-tighter	">
              by {filterArtist["im:name"].label}
            </p>
          </div>
        </Link>
        <div>
          <h5 className="text-sm font-semibold">Description:</h5>
          <p className="text-sm font-normal italic whitespace-wrap break-words">
            {filterArtist.summary.label}
          </p>
        </div>
      </div>
    </div>
  );
}
