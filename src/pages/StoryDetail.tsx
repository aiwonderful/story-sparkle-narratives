
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, Clock, Users } from 'lucide-react';
import { mockStories, Story } from '../data/mockStories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundStory = mockStories.find(story => story.id === id) || null;
      setStory(foundStory);
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story?.title,
        text: story?.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The link to this story has been copied to your clipboard.",
        duration: 3000,
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Story bookmarked!",
      description: "This story has been added to your favorites.",
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Story not found</h1>
          <p className="mb-6">The story you're looking for doesn't exist or has been removed.</p>
          <Button>
            <Link to="/">Return to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Story Header */}
        <div className="bg-gradient-to-b from-story-background to-white dark:from-gray-800 dark:to-gray-900 py-8">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-story-primary mb-4">
              <ArrowLeft size={20} className="mr-2" /> Back to stories
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 story-heading">{story.title}</h1>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-story-primary/10 text-story-primary px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                  <span className="flex items-center bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                    <Clock size={14} className="mr-1" /> {story.readingTime}
                  </span>
                  <span className="flex items-center bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                    <Users size={14} className="mr-1" /> Ages {story.ageRange}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 size={18} className="mr-2" /> Share
                  </Button>
                  <Button variant="outline" onClick={handleBookmark}>
                    <Bookmark size={18} className="mr-2" /> Save
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src={story.coverImage} 
                  alt={story.title}
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Audio Player */}
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Listen to the Story</h2>
          <AudioPlayer audioUrl={story.audioUrl} title={story.title} />
        </div>
        
        {/* Story Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Read the Story</h2>
            
            {story.images.length > 0 && (
              <div className="mb-6">
                <img 
                  src={story.images[0]} 
                  alt={`Illustration for ${story.title}`}
                  className="w-full h-auto rounded-lg shadow-md mb-4" 
                />
              </div>
            )}
            
            <div className="prose dark:prose-invert max-w-none story-content">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            {story.images.length > 1 && (
              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {story.images.slice(1).map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Illustration ${index + 2} for ${story.title}`}
                    className="w-full h-auto rounded-lg shadow-md" 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* YouTube Video */}
        {story.youtubeId && (
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold mb-4">Watch the Story</h2>
              <YouTubeEmbed youtubeId={story.youtubeId} title={story.title} />
            </div>
          </div>
        )}
        
        {/* Related Stories */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStories
              .filter(s => s.id !== story.id && s.category === story.category)
              .slice(0, 3)
              .map(relatedStory => (
                <Link 
                  key={relatedStory.id}
                  to={`/story/${relatedStory.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <img 
                    src={relatedStory.coverImage} 
                    alt={relatedStory.title}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{relatedStory.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedStory.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoryDetail;
