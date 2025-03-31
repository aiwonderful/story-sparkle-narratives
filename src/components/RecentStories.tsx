
import React from 'react';
import StoryCard from './StoryCard';
import { mockStories } from '../data/mockStories';

const RecentStories = () => {
  // Get the last 4 stories
  const recentStories = mockStories.slice(-4);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recently Added</h2>
          <a 
            href="/categories" 
            className="text-story-primary hover:text-story-primary/80 transition-colors"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentStories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              coverImage={story.coverImage}
              description={story.description}
              category={story.category}
              ageRange={story.ageRange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentStories;
