'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const AudioPlayer = () => {

  let path = usePathname()
  if (path === '/') path = '/toward-the-point-of-no-return'

  const [currentNarrator, setCurrentNarrator] = useState<string>(() => {
    return localStorage.getItem('selectedNarrator') || 'Winston';
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const currentTimeRef = useRef(0); // store current time at Ref
  const audioRef = useRef<HTMLAudioElement>(null);

  const narrators = [
    'Winston', 'Tanor', 'Marry', 'Sophia', 'John', 'Jessica', 'Tanner', 'Jamie', 'Lisa', 'Nate'
  ].map(narrator => ({ name: narrator, file: `/audio${path}/${narrator}.mp3` }))


  // Проверяем наличие файлов для каждого чтеца
  const checkFileExists = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      //console.log('check file response', response)
      return response.ok // Вернёт true, если статус 200-299, иначе false
    } catch (error) {
      console.error('Error checking file:', error)
      return false;
    }
  };
  // useEffect для фильтрации чтецов
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
      console.log('Filtered Narrators:', filteredNarrators);
      if (filteredNarrators.length === 0) {
        console.warn('No available audio files found.');
      }
      setAvailableNarrators(filteredNarrators);
    };
    checkNarratorFiles();
  }, [path]);

  // switching a narrator with storing time
  const switchNarrator = (newNarrator: string) => {
    if (audioRef.current) {
      // save current time
      currentTimeRef.current = audioRef.current.currentTime; // store current time at Ref
      // set a new narrator
      setCurrentNarrator(newNarrator);
      // write a new narrator down into localStorage
      localStorage.setItem('selectedNarrator', newNarrator);
    }
  };

  // handle
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement && availableNarrators.length > 0) {
      const narratorFile = availableNarrators.find(n => n.name === currentNarrator)?.file || '';
      audioElement.src = narratorFile;
      // set stored time
      audioElement.currentTime = currentTimeRef.current; // take time from ref
      if (isPlaying) {
        audioElement.play();
      }
      // preload metadata
      audioElement.preload = 'metadata';
    } else {
      console.warn('No available narrator files to play.');
    }
  }, [currentNarrator, isPlaying, availableNarrators]);

  let audioStops: { [key: string]: string } = {}

  // stop audio
  useEffect(() => {
    const audioElement = audioRef.current;
    const localAudioStops = localStorage.getItem('audio-stops')
    if (localAudioStops) {
      audioStops = JSON.parse(localAudioStops)
      if (audioElement && audioStops[path]) {
        const savedTime = Number(audioStops[path]);
        if (!isNaN(savedTime) && savedTime > 0) {
          audioElement.currentTime = savedTime;
        }
      }
    }
    return () => {
      if (audioElement) {
        audioStops[path] = String(audioElement?.currentTime)
        localStorage.setItem('audio-stops', JSON.stringify(audioStops))
        audioElement.pause()
      }
    };
  }, [path]);

  // update current time
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      currentTimeRef.current = audioRef.current.currentTime; // update ref instead of state
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
            {/* <option>Choose...</option> */}
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
