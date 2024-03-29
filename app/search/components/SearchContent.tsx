'use client';

import MediaItem from '@/components/MediaItem';
import { Song } from '@/types/types';

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Songs Found
      </div>
    );

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map(i => (
        <div key={i.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={i} />
          </div>
          {/* TODO: Add Like Button Here */}
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
