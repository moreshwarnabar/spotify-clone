import getFavouriteSongs from '@/actions/getFavouriteSongs';
import Header from '@/components/Header';
import Image from 'next/image';
import FavouriteContent from './components/FavouriteContent';

export const revalidate = 0;

const Favourite = async () => {
  const songs = await getFavouriteSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="flex flex-col md:flex-row items-center gap-x-5">
          <div className="relative h-32 w-32 lg:h-44 lg:w-44">
            <Image
              fill
              src="/images/liked.jpeg"
              alt="Playlist"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <p className="hidden md:block font-semibold text-sm">Playlist</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
              Favourites
            </h1>
          </div>
        </div>
      </Header>
      <FavouriteContent songs={songs} />
    </div>
  );
};

export default Favourite;
