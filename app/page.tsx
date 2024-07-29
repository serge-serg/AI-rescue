import type { Metadata } from 'next'
import aiChallenge from '@/assets/images/1-AI-challenge.webp';

export const metadata: Metadata = {
  title: 'Home | AI Rescue',
}

export default function Home() {
  return (
    <>
      <h1>Welcome to AI Rescue</h1>
      <p>Здесь вы узнаете:</p>
      <ol>
        <li>
          <img src={aiChallenge.src} alt="AI Challenge" width={200} height={200} />
          Почему создание Super AI представляет самый серьёзный вызов человечеству за всю его историю</li>
        <li>Почему, несмотря на этот вызов, люди будут стремиться создать его</li>
        <li>О наихудших сценариях нанесения ущерба людям со стороны Super AI</li>
        <li>О возможных подходах к устранению опасности от Super AI</li>
      </ol>
    </>
  )
}