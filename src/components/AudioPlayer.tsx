
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, RefreshCw } from 'lucide-react';
import { Slider } from './ui/slider';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

const AudioPlayer = ({ audioUrl, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const restart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (isMuted && value[0] > 0) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  // Format time as mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-player bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md my-4">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium truncate">{title}</h3>
        <div className="text-xs text-muted-foreground">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      
      <div className="mb-4">
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 100}
          step={0.01}
          onValueChange={handleProgressChange}
          className="w-full"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={skipBackward}
            className="text-gray-600 dark:text-gray-300 hover:text-story-primary dark:hover:text-story-primary transition-colors"
            aria-label="Skip backward 10 seconds"
          >
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={togglePlay}
            className="bg-story-primary text-white p-2 rounded-full hover:bg-story-primary/90 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>
          
          <button 
            onClick={skipForward}
            className="text-gray-600 dark:text-gray-300 hover:text-story-primary dark:hover:text-story-primary transition-colors"
            aria-label="Skip forward 10 seconds"
          >
            <SkipForward size={20} />
          </button>
          
          <button 
            onClick={restart}
            className="text-gray-600 dark:text-gray-300 hover:text-story-primary dark:hover:text-story-primary transition-colors"
            aria-label="Restart"
          >
            <RefreshCw size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 w-24">
          <button 
            onClick={toggleMute}
            className="text-gray-600 dark:text-gray-300 hover:text-story-primary dark:hover:text-story-primary transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <Slider
            value={[isMuted ? 0 : volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
