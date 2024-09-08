'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const AudioPlayer = () => {

  const path = usePathname()
  //const router = useRouter()
  //console.log('router', path)

  const [currentNarrator, setCurrentNarrator] = useState<string>(() => {
    // Получаем чтеца из localStorage при загрузке страницы
    return localStorage.getItem('selectedNarrator') || 'Winston';
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const narrators = [
    { name: 'Winston', file: '/audio/toward-the-point-of-no-return/default.mp3' },
    { name: 'Tanor', file: '/audio/toward-the-point-of-no-return/tanor.mp3' },
    { name: 'Marry', file: '/audio/toward-the-point-of-no-return/marry.mp3' },
    { name: 'Sophia', file: '/audio/toward-the-point-of-no-return/sophia.mp3' },
    { name: 'Jessica', file: '/audio/toward-the-point-of-no-return/jessica.mp3' },
  ];

  // switching a narrator with storing time
  const switchNarrator = (newNarrator: string) => {
    if (audioRef.current) {
      // save current time
      setCurrentTime(audioRef.current.currentTime);
      // set a new narrator
      setCurrentNarrator(newNarrator);
      // write a new narrator down into localStorage
      localStorage.setItem('selectedNarrator', newNarrator);
    }
  };

  // handle 
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const narratorFile = narrators.find(n => n.name === currentNarrator)?.file || '';
      audioElement.src = narratorFile;
      // set stored time
      audioElement.currentTime = currentTime;
      if (isPlaying) {
        audioElement.play();
      }
      // preload metadata
      audioElement.preload = 'metadata';
    }
  }, [currentNarrator, isPlaying]);

  let audioStops: { [key: string]: string } = {}

  // stop audio
  useEffect(() => {
    const audioElement = audioRef.current;
    const localAudioStops = localStorage.getItem('audio-stops')
    if (localAudioStops) {
      audioStops = JSON.parse(localAudioStops)
      if (audioElement) {
        audioElement.currentTime = Number(audioStops[path])
      }
    }
    return () => {
      if (audioElement) {
        audioStops[path] = String(audioElement?.currentTime)
        localStorage.setItem('audio-stops', JSON.stringify(audioStops))
        audioElement.pause()
      }
    };
  }, []);

  // update current time
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // manage play / pause
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <audio
        style={{ width: '300px', height: '35px', opacity: '0.75' }}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        controls
      >
        <source src={narrators.find(n => n.name === currentNarrator)?.file} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <select
          id="narrator-select"
          onChange={(e) => switchNarrator(e.target.value)}
          value={currentNarrator}
          style={{ color: '#ddd', backgroundColor: '#121212' }}
        >
          {narrators.map(narrator => (
            <option key={narrator.name} value={narrator.name}>
              &raquo; {narrator.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handlePlayPause} style={{ marginLeft: '10px' }}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
