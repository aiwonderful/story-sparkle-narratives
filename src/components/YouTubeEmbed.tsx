
import React from 'react';
import { Youtube } from 'lucide-react';

interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
  channelUrl?: string;
}

const YouTubeEmbed = ({ youtubeId, title, channelUrl = "https://www.youtube.com/@ChildrenStoryPro" }: YouTubeEmbedProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      
      <div className="flex justify-center">
        <a 
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-md"
        >
          <Youtube size={24} /> Subscribe to Our YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
