
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryScroller from '../components/CategoryScroller';
import FeaturedStories from '../components/FeaturedStories';
import RecentStories from '../components/RecentStories';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { Youtube } from 'lucide-react';

const Index = () => {
  const youtubeChannelUrl = "https://www.youtube.com/@ChildrenStoryPro";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* YouTube Subscribe Banner */}
        <div className="py-4 bg-gradient-to-r from-story-background via-white to-story-background dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 flex justify-center">
            <a 
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <Youtube size={24} className="animate-pulse" /> Subscribe to Our YouTube
            </a>
          </div>
        </div>
        
        <CategoryScroller />
        <FeaturedStories />
        <RecentStories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
