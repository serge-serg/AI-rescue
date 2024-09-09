'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const AudioPlayer = () => {
  let path = usePathname()
  if (path === '/') path = '/toward-the-point-of-no-return'

  const [currentNarrator, setCurrentNarrator] = useState<string>('Winston');  // Начальное значение
  const [isPlaying, setIsPlaying] = useState(false);
  const currentTimeRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Загружаем чтеца из localStorage при первом рендере
  useEffect(() => {
    const savedNarrator = localStorage.getItem('selectedNarrator');
    if (savedNarrator) {
      setCurrentNarrator(savedNarrator);
    }
  }, []);

  const narrators = [
    'Winston', 'Tanor', 'Marry', 'Sophia', 'John', 'Jessica', 'Tanner', 'Jamie', 'Lisa', 'Nate'
  ].map(narrator => ({ name: narrator, file: `/audio${path}/${narrator}.mp3` }))

  const checkFileExists = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error('Error checking file:', error);
      return false;
    }
  };

  const [availableNarrators, setAvailableNarrators] = useState(narrators);
  useEffect(() => {
    const checkNarratorFiles = async () => {
      const filteredNarrators = [];
      for (const narrator of narrators) {
        const fileExists = await checkFileExists(narrator.file);
        if (fileExists) {
          filteredNarrators.push(narrator);
        }
      }
      setAvailableNarrators(filteredNarrators);
    };
    checkNarratorFiles();
  }, [path]);

  const switchNarrator = (newNarrator: string) => {
    if (audioRef.current) {
      currentTimeRef.current = audioRef.current.currentTime;
      setCurrentNarrator(newNarrator);
      localStorage.setItem('selectedNarrator', newNarrator);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement && availableNarrators.length > 0) {
      const narratorFile = availableNarrators.find(n => n.name === currentNarrator)?.file || '';
      audioElement.src = narratorFile;
      audioElement.currentTime = currentTimeRef.current;
      if (isPlaying) {
        audioElement.play();
      }
      audioElement.preload = 'metadata';
    }
  }, [currentNarrator, isPlaying, availableNarrators]);

  let audioStops: { [key: string]: string } = {}

  useEffect(() => {
    const audioElement = audioRef.current;
    const localAudioStops = localStorage.getItem('audio-stops');
    if (localAudioStops) {
      audioStops = JSON.parse(localAudioStops);
      if (audioElement && audioStops[path]) {
        const savedTime = Number(audioStops[path]);
        if (!isNaN(savedTime) && savedTime > 0) {
          audioElement.currentTime = savedTime;
        }
      }
    }
    return () => {
      if (audioElement) {
        audioStops[path] = String(audioElement.currentTime);
        localStorage.setItem('audio-stops', JSON.stringify(audioStops));
        audioElement.pause();
      }
    };
  }, [path]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      currentTimeRef.current = audioRef.current.currentTime;
    }
  };

  return (
    <div className="audio-wrapper-inner" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        controls
      >
        {availableNarrators.length > 0 && (
          <source
            src={availableNarrators.find(n => n.name === currentNarrator)?.file}
            type="audio/mp3"
          />
        )}
        Your browser does not support the audio element.
      </audio>
      {availableNarrators.length > 1 && (
        <div>
          <select
            id="narrator-select"
            onChange={(e) => switchNarrator(e.target.value)}
            value={currentNarrator}
            style={{ color: '#ddd', backgroundColor: '#121212' }}
          >
            {availableNarrators.map(narrator => (
              <option key={narrator.name} value={narrator.name}>
                &raquo; {narrator.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
