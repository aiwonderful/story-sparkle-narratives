
import React from 'react';

interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
}

const YouTubeEmbed = ({ youtubeId, title }: YouTubeEmbedProps) => {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg my-6">
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
  );
};

export default YouTubeEmbed;
