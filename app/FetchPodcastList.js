import PodcastList from './components/PodcastList'

const handleFetch = async () => {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  if(!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data;
};

export default async function FetchPodcastList() {
  const data = await handleFetch();
  const res = data.feed.entry;
  return (
    <div className="space-y-20 w-full">
     <PodcastList data={res} />
    </div>
  );
}
