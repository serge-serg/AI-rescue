import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const [currentNarrator, setCurrentNarrator] = useState('Winston');
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const narrators = [
    { name: 'Winston', file: '/audio/toward-the-point-of-no-return/default.mp3' },
    { name: 'Tanor', file: '/audio/toward-the-point-of-no-return/tanor.mp3' },
    { name: 'Marry', file: '/audio/toward-the-point-of-no-return/marry.mp3' },
    { name: 'Sophia', file: '/audio/toward-the-point-of-no-return/sophia.mp3' },
    { name: 'Jessica', file: '/audio/toward-the-point-of-no-return/jessica.mp3' },
  ];

  const switchNarrator = (newNarrator: string) => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setCurrentNarrator(newNarrator);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const narratorFile = narrators.find(n => n.name === currentNarrator)?.file || '';
      audioRef.current.src = narratorFile; // Смена источника на нового чтеца
      audioRef.current.currentTime = currentTime; // Продолжаем с текущего времени
      audioRef.current.play(); // Начать воспроизведение

      // Устанавливаем атрибут preload как "metadata", чтобы загружать только метаданные, а не весь файл.
      audioRef.current.preload = 'metadata'; 
    }
  }, [currentNarrator, currentTime]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <audio style={{ width: '300px', height: '35px', opacity: '0.75'}} ref={audioRef} controls>
        <source src={narrators.find(n => n.name === currentNarrator)?.file} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div>
        {/* <label htmlFor="narrator-select">Choose narrator: </label> */}
        <select
          id="narrator-select"
          onChange={(e) => switchNarrator(e.target.value)}
          value={currentNarrator}
          style={{ color: '#ddd', backgroundColor: '#121212' }}
        >
          {narrators.map(narrator => (
            <option key={narrator.name} value={narrator.name}>
              &raquo; { narrator.name }
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AudioPlayer;
