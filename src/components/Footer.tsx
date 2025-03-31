
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-story-primary" />
              <span className="text-xl font-bold text-story-primary">ChildrenStory.pro</span>
            </div>
            <p className="text-muted-foreground">
              Inspiring young minds with magical stories and adventures.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-muted-foreground hover:text-story-primary">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-story-primary">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-story-primary">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-story-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/categories" className="text-muted-foreground hover:text-story-primary">All Stories</Link></li>
              <li><Link to="/categories/fantasy" className="text-muted-foreground hover:text-story-primary">Fantasy</Link></li>
              <li><Link to="/categories/animals" className="text-muted-foreground hover:text-story-primary">Animal Stories</Link></li>
              <li><Link to="/categories/adventure" className="text-muted-foreground hover:text-story-primary">Adventure</Link></li>
              <li><Link to="/categories/bedtime" className="text-muted-foreground hover:text-story-primary">Bedtime Stories</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-story-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-story-primary">Contact</Link></li>
              <li><Link to="/subscribe" className="text-muted-foreground hover:text-story-primary">Subscribe</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-story-primary">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for new stories and updates</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-story-primary"
              />
              <button className="bg-story-primary text-white px-4 py-2 rounded-md hover:bg-story-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ChildrenStory.pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
