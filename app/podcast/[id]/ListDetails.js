import CardDetail from "@/app/components/CardDetail";
import ListDetail from "@/app/components/ListDetail";

export default function ListDetails({ podcast }) {
  return (
    <div className="py-6 w-full grid grid-cols-1 md:grid-cols-6 justify-items-center md:justify-items-start">
      <div className="col-span-2">
        <CardDetail podcast={podcast} />
      </div>
      <div className="col-span-4 w-full space-y-4">
        <div className="w-full p-4 shadow-lg text-lg font-bold">
          <span>Episodes: {podcast.length}</span>
        </div>
        <ListDetail podcast={podcast} />
      </div>
    </div>
  );
}
