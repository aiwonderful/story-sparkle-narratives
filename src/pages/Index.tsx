
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedStories from '../components/FeaturedStories';
import RecentStories from '../components/RecentStories';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
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
