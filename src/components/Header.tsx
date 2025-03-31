
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const categories = [
    { name: "All Stories", icon: "📚", color: "bg-purple-500", link: "/categories" },
    { name: "Fantasy", icon: "✨", color: "bg-violet-500", link: "/categories/fantasy" },
    { name: "Adventure", icon: "🚀", color: "bg-orange-500", link: "/categories/adventure" },
    { name: "Animals", icon: "🐰", color: "bg-green-500", link: "/categories/animals" },
    { name: "Bedtime", icon: "🌙", color: "bg-blue-500", link: "/categories/bedtime" },
    { name: "Fairy Tales", icon: "👑", color: "bg-pink-500", link: "/categories/fairy-tales" },
    { name: "Nature", icon: "🏔️", color: "bg-teal-500", link: "/categories/nature" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-story-primary" />
          <span className="text-xl font-bold text-story-primary">ChildrenStory.pro</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-story-text hover:text-story-primary transition-colors font-medium">
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-story-primary data-[state=open]:bg-transparent">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4 md:grid-cols-2 lg:w-[600px]">
                    <div className="p-4 bg-amber-50 dark:bg-gray-800/50 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Browse Categories</h3>
                      <div className="grid grid-cols-4 gap-6">
                        {categories.map((category) => (
                          <Link 
                            key={category.name} 
                            to={category.link}
                            className="flex flex-col items-center group"
                          >
                            <div className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center mb-2 text-white",
                              category.color
                            )}>
                              <span className="text-xl">{category.icon}</span>
                            </div>
                            <span className="text-sm text-center group-hover:text-story-primary transition-colors">
                              {category.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/about" className="text-story-text hover:text-story-primary transition-colors font-medium">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button className="hidden md:inline-flex">
            <Link to="/subscribe">Subscribe</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
