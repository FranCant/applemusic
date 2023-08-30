import CardDetail from "@/app/components/CardDetail";
import parse from 'html-react-parser'

export default function Episode({ id, episodeId }) {
    
  const filterEpisode = id?.find((el) => el.trackId == episodeId);
  return (
    <div className="py-6 w-full gap-4 grid grid-cols-6 justify-items-start">
      <div className="md:col-span-2 col-span-6 w-full flex items-center justify-start">
        <CardDetail podcast={id} />
      </div>
      <div className="col-span-6 md:col-span-4 flex items-center justify-end space-y-4 w-full">
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
