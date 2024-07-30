import Link from 'next/link';
import type { Metadata } from 'next';
import aiChallenge from '@/assets/images/1-AI-challenge.webp';
import aiCreation from '@/assets/images/2-AI-creation.webp';
import aiDisaster from '@/assets/images/3-AI-disaster.webp';
import aiRescue from '@/assets/images/4-AI-rescue-approaches.webp';
import menuItems from '@/components/menuItems';

export const metadata: Metadata = {
  title: 'Home | AI Rescue',
}

interface SectionProps {
  image: {
    src: string;
  };
  alt: string;
  text: string;
  href: string;
}

const Section = ({ image, alt, text, href }: SectionProps) => (
  <Link href={href} className='flex gap-4 max-w-1/2-minus-1rem items-center cursor-pointer'>
    <img src={image.src} alt={alt} style={{ maxWidth: '50%', width: '15vw', height: 'auto' }} />
    <p>{text}</p>
  </Link>
);

const sectionData = [
  { image: aiChallenge, alt: 'AI Challenge', text: 'Что такое Super AI и почему он угрожает существованию человечества' },
  { image: aiCreation, alt: 'AI Creation', text: 'Почему, несмотря на этот вызов, люди будут стремиться создать его' },
  { image: aiDisaster, alt: 'AI Disaster', text: 'О наихудших сценариях нанесения ущерба людям со стороны Super AI' },
  { image: aiRescue, alt: 'AI Rescue', text: 'Возможные способы предотвращения ущерба человечеству' },
]

const menus = menuItems.slice(1);

export default function Home() {
  return (
    <>
      <h1>Welcome to AI Rescue</h1>
      <h3>Здесь вы узнаете:</h3>
      <br/>
      <div className='flex flex-wrap gap-8'>
        {sectionData.map(({ image, alt, text }, index) => (
          <Section key={index} href={menus?.[index].href} image={image} alt={alt} text={text} />
        ))}
      </div>
    </>
  );
}
