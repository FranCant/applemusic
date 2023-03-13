import Episode from "./Episode";

async function fetchPodcast(podcastId) {
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast
  &entity=podcastEpisode&limit=20`,
    { next: { revalidate: 30 } }
  );
  const podcasts = await res.json();
  const podcast = podcasts.results;
  return podcast;
}

async function EpisodeId({ params: { id, episodeId } }) {
  const podcastId = await fetchPodcast(id);
  
  return (
    <>
      <Episode id={podcastId} episodeId={episodeId} />
    </>
  );
}

export default EpisodeId;

export async function generateStaticParams() {
  const res = await fetch(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
  );
  const data = await res.json();
  const pods = data.feed.entry;
  return pods.map((pod) => ({
    id: pod.id.attributes["im:id"].toString(),
    episodeId: pod.id.attributes["im:id"].toString(),
  }));
}
