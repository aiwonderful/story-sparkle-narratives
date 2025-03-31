
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';

interface StoryCardProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  category: string;
  ageRange: string;
}

const StoryCard = ({ id, title, coverImage, description, category, ageRange }: StoryCardProps) => {
  return (
    <Link to={`/story/${id}`}>
      <Card className="story-card overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold line-clamp-1 mb-2 text-story-primary">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs bg-story-background text-story-primary px-2 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
              Ages {ageRange}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StoryCard;
