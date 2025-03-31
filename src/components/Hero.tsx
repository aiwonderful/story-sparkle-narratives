
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-story-background to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-story-primary rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-story-secondary rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-story-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-16 w-16 text-story-primary animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-story-text dark:text-white">
            <span className="text-story-primary">Magical</span> Stories for <span className="text-story-secondary">Curious</span> Minds
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Discover a world of enchanting tales that spark imagination, teach valuable lessons, and create bedtime memories that last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-story-primary hover:bg-story-primary/90">
              <Link to="/categories" className="flex items-center gap-2">
                Explore Stories <BookOpen size={20} />
              </Link>
            </Button>
            
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search stories..." 
                className="w-full h-10 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-story-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
