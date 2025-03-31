
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import { mockStories } from '../data/mockStories';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

const Categories = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState<string>('all');
  
  // Filter stories based on category, search term, and age
  const filteredStories = mockStories.filter(story => {
    // Filter by category if provided
    const categoryMatch = category 
      ? story.category.toLowerCase() === category.toLowerCase() 
      : true;
    
    // Filter by search term
    const searchMatch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        story.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by age range
    const ageMatch = ageFilter === 'all' ? true : story.ageRange.includes(ageFilter);
    
    return categoryMatch && searchMatch && ageMatch;
  });

  const categoryTitle = category 
    ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Stories` 
    : 'All Stories';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-story-background dark:bg-gray-800 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryTitle}</h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {category 
                ? `Explore our collection of ${category.toLowerCase()} stories for children of all ages.` 
                : 'Discover magical worlds, brave heroes, and important lessons in our complete story collection.'}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input 
                  type="text" 
                  placeholder="Search stories..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-story-primary"
                />
              </div>
              
              <div className="flex gap-2 items-center">
                <Filter size={20} className="text-muted-foreground" />
                <select 
                  value={ageFilter}
                  onChange={(e) => setAgeFilter(e.target.value)}
                  className="bg-white dark:bg-gray-700 border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-story-primary"
                >
                  <option value="all">All Ages</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                  <option value="7">7+</option>
                  <option value="8">8+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStories.map(story => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No stories found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setAgeFilter('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
