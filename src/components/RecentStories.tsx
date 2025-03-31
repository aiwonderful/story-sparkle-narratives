
import React from 'react';
import StoryCard from './StoryCard';
import { mockStories } from '../data/mockStories';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const RecentStories = () => {
  // Get the last 4 stories
  const recentStories = mockStories.slice(-4);

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-story-text dark:text-white">Recently Added</h2>
          <Button 
            variant="ghost" 
            className="text-story-primary hover:text-story-primary/80 transition-colors group flex items-center"
            asChild
          >
            <a href="/categories">
              View All <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
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
