import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import Image from "next/image";
import PageWrapper from '@/components/PageWrapper';
import imgCreators from '@/assets/images/Pluto&Rabbit.jpg'
import { ReactNode } from 'react';

export default function LetsConnect() {
  const LiSection = ({ name, duties }: { name: ReactNode | string, duties: string }) => (
    <>
      <h3 style={{paddingBottom: '0.5rem'}}>{name}</h3>
      <li style={{ margin: ' 0.5rem 2rem 1rem' }}>{duties}</li>
    </>
  )
  return (
    <PageWrapper filename={__filename}>
      <p>This site has been created by:</p>
      <ul style={{ padding: 0, marginBottom: '2rem' }}>
        <LiSection name={<a href="https://www.linkedin.com/in/sergey-cleftsow/">Sergei Kevtsov</a>} duties='Ideation, research, writing, web development, developing and pitching video concepts, scriptwriting, and storyboarding.' />
        <LiSection name={<a href="https://www.linkedin.com/in/daniil-klevtsov-633a1a235/">Daniil Kevtsov</a>} duties='Filming and directing video shoots, ensuring the technical quality of the final product, managing production timelines, incorporating feedback and making revisions, publishing, and promoting videos across various platforms.' />
      </ul>
      <Image style={{ width: '500px', minWidth: '400px' }} alt="Pluto and Rabbit" title='Pluto and Rabbit' src={imgCreators} />
    </PageWrapper>
  )
}