import CardDetail from "@/app/components/CardDetail";
import parse from 'html-react-parser'

export default function Episode({ id, episodeId }) {
    
  const filterEpisode = id?.find((el) => el.trackId == episodeId);
  return (
    <div className="py-6 w-full grid grid-cols-6 justify-items-start">
      <div className="col-span-2">
        <CardDetail podcast={id} />
      </div>
      <div className="col-span-4 w-full space-y-4">
        <div className="w-full p-4 shadow-lg text-lg font-bold space-y-2">
          <h3 className="font-extrabold">{filterEpisode?.trackName}</h3>
          <p className="text-sm font-normal italic">
            {filterEpisode?.description ? parse(`${filterEpisode?.description}`) : filterEpisode?.trackName}
          </p>
          <div className="w-full py-4">
            <audio
              className="w-full mt-4"
              src={filterEpisode?.episodeUrl}
              controls="controls"
              preload="none"
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
