
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const { theme, setTheme } = useTheme();

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
          <Link to="/categories" className="text-story-text hover:text-story-primary transition-colors font-medium">
            Categories
          </Link>
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
