import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const [currentNarrator, setCurrentNarrator] = useState('Winston');
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

  // Смена чтеца без сброса времени воспроизведения
  const switchNarrator = (newNarrator: string) => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);  // Сохраняем текущее время
      setCurrentNarrator(newNarrator);              // Устанавливаем нового чтеца
    }
  };

  // Этот useEffect управляет переключением чтецов
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const narratorFile = narrators.find(n => n.name === currentNarrator)?.file || '';
      audioElement.src = narratorFile;
      audioElement.currentTime = currentTime; // Устанавливаем сохраненное время
      if (isPlaying) {
        audioElement.play(); // Если звук был активен, продолжаем проигрывание
      }
      audioElement.preload = 'metadata'; // Предзагрузка метаданных
    }
  }, [currentNarrator, isPlaying]);

  // Этот useEffect останавливает звук, если компонент размонтируется
  useEffect(() => {
    const audioElement = audioRef.current;
    return () => {
      if (audioElement) {
        audioElement.pause();
        setCurrentTime(audioElement.currentTime);  // Сохраняем текущее время перед размонтированием
      }
    };
  }, []);

  // Обновляем текущее время на каждой паузе/проигрывании
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Управление проигрыванием/паузой
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
        onPlay={() => setIsPlaying(true)}  // Обновляем состояние, если звук играет
        onPause={() => setIsPlaying(false)} // Обновляем состояние, если звук на паузе
        onTimeUpdate={handleTimeUpdate}    // Обновляем текущее время на каждом изменении
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
