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
    'Winston', 'Tanor', 'Marry', 'Sophia', 'Jessica', 'Tanner', 'Jamie', 'Lisa', 'Nate'
  ].map(narrator => ({ name: narrator, file: `/audio${path}/${narrator}.mp3` }))

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
    if (audioElement) {
      const narratorFile = narrators.find(n => n.name === currentNarrator)?.file || '';
      audioElement.src = narratorFile;
      // set stored time
      audioElement.currentTime = currentTimeRef.current; // take time from ref
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
  }, []);

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
    </div>
  );
};

export default AudioPlayer;
