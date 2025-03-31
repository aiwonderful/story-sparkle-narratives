
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Crown, Sparkles, Moon, Rabbit, Rocket, MountainSnow } from 'lucide-react';
import { cn } from '../lib/utils';

interface Category {
  name: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "All Stories",
    icon: <BookOpen size={24} />,
    color: "bg-story-primary text-white",
    link: "/categories"
  },
  {
    name: "Fantasy",
    icon: <Sparkles size={24} />,
    color: "bg-purple-500 text-white",
    link: "/categories/fantasy"
  },
  {
    name: "Adventure",
    icon: <Rocket size={24} />,
    color: "bg-story-accent text-white",
    link: "/categories/adventure"
  },
  {
    name: "Animals",
    icon: <Rabbit size={24} />,
    color: "bg-green-500 text-white",
    link: "/categories/animals"
  },
  {
    name: "Bedtime",
    icon: <Moon size={24} />,
    color: "bg-blue-500 text-white",
    link: "/categories/bedtime"
  },
  {
    name: "Fairy Tales",
    icon: <Crown size={24} />,
    color: "bg-pink-500 text-white",
    link: "/categories/fairy-tales"
  },
  {
    name: "Nature",
    icon: <MountainSnow size={24} />,
    color: "bg-teal-500 text-white",
    link: "/categories/nature"
  }
];

const CategoryScroller = () => {
  return (
    <div className="py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-2", 
                  category.color
                )}>
                  {category.icon}
                </div>
                <span className="text-sm text-center">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryScroller;
