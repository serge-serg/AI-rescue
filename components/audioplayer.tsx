'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const AudioPlayer = () => {
  const defaultNarrator = 'Lisa'
  let path = usePathname()
  if (path === '/') path = '/toward-the-point-of-no-return'

  const narrators = [
    'Winston',
    'Tanor',
    'Marry',
    'Sophia',
    'John',
    'Jessica',
    'Tanner',
    'Jamie',
    defaultNarrator,
    'Nate',
    'Kristy',
  ].map(narrator => ({ name: narrator, file: `/audio${path}/${narrator}.mp3` }))

  const [currentNarrator, setCurrentNarrator] = useState<string>('')
  const [isPlaying, setIsPlaying] = useState(false)
  const currentTimeRef = useRef(0)
  const audioRef = useRef<HTMLAudioElement>(null);
  const [availableNarrators, setAvailableNarrators] = useState([{ name: '', file: '' }]);

  // upload a narrator from localStorage while an initial render
  useEffect(() => {
    const savedNarrator = localStorage.getItem('selectedNarrator')

    const checkSavedNarrator = async (narratorName: string) => {
      const narratorAudioFile = narrators?.find(narrator => narrator?.name === narratorName)?.file

      if (narratorAudioFile) {
        const fileExists = await checkFileExists(narratorAudioFile)
        return fileExists
      }
      return false
    }

    const setAvailableNarrator = async () => {
      if (savedNarrator) {
        // Check if the file for the saved narrator exists
        const fileExists = await checkSavedNarrator(savedNarrator)
        if (fileExists) {
          // If the saved narrator file exists, install it
          setCurrentNarrator(savedNarrator)
          return
        }
      }

      // If there is no saved narrator or its file does not exist, check defaultNarrator
      const defaultFileExists = await checkSavedNarrator(defaultNarrator)

      if (defaultFileExists) {
        setCurrentNarrator(defaultNarrator)
        localStorage.setItem('selectedNarrator', defaultNarrator)
      } else {
        // If defaultNarrator does not have a file, look for an available narrator
        const availableNarrator = await findNextAvailableNarrator()
        if (availableNarrator) {
          setCurrentNarrator(availableNarrator.name)
          localStorage.setItem('selectedNarrator', availableNarrator.name)
        } else {
          console.warn('No available narrator files found.')
          setCurrentNarrator('') // set an empty narrator as a fallback
        }
      }
    }

    setAvailableNarrator()
  }, [narrators])

  const findNextAvailableNarrator = async () => {
    for (const narrator of narrators) {
      const fileExists = await checkFileExists(narrator.file)
      if (fileExists) {
        return narrator
      }
    }
    return null
  }

  const checkFileExists = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error('Error checking file:', error);
      return false;
    }
  };

  useEffect(() => {
    const checkNarratorFiles = async () => {
      const filteredNarrators = [];
      for (const narrator of narrators) {
        const fileExists = await checkFileExists(narrator.file)
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
      <div>
        <select
          id="narrator-select"
          onChange={(e) => switchNarrator(e.target.value)}
          value={currentNarrator}
          style={{ color: '#ddd', backgroundColor: '#121212' }}
        >
          {
            (availableNarrators.length > 1 && availableNarrators.map(narrator => (
              <option key={narrator.name} value={narrator.name}>
                &raquo; {narrator.name}
              </option>
            ))) || 
              <option selected value="">Loading...</option>
          }
        </select>
      </div>

    </div>
  );
};

export default AudioPlayer;
