
import React from 'react';
import StoryCard from './StoryCard';
import { mockStories } from '../data/mockStories';

const FeaturedStories = () => {
  // Get the first 3 stories for featured section
  const featuredStories = mockStories.slice(0, 3);

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Stories</h2>
          <a 
            href="/categories" 
            className="text-story-primary hover:text-story-primary/80 transition-colors"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
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

export default FeaturedStories;
