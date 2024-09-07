import { ReactElement, ReactNode } from 'react';
import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import Image from "next/image";
import PageWrapper from '@/components/PageWrapper';
import imgCreators from '@/assets/images/Pluto&Rabbit.jpg'
import imgTelegram from '@/assets/images/icons/telegram.svg'

export default function LetsConnect() {
  const LiSection = ({ linkedInLink, duties, telegramLink }: { linkedInLink: ReactElement, duties: string, telegramLink: string }) => {
    const userName = linkedInLink?.props.children
    return (
    <>
      <h3 style={{ paddingBottom: '0.5rem' }}>
        {linkedInLink}
        <a href={telegramLink}
          style={{
            transform: 'translateY(-2px)',
            display: 'inline-block'
          }}>
          <Image
            src={imgTelegram}
            alt={`Join ${userName}'s Telegram`}
            title={`Join ${userName}'s Telegram`}
            width="26"
            style={{ margin: '0 0.5rem', display: 'inline-block' }}
          />
        </a>
      </h3>
      <li style={{ margin: ' 0.5rem 2rem 1rem' }}>{duties}</li>
    </>
  )}
  return (
    <PageWrapper filename={__filename} underHeaderBlock={false}>
      <p>This site has been created by:</p>
      <section className='xl:flex'>
        <ul style={{
          padding: 0,
          marginBottom: '2rem',
        }}>
          <LiSection
            linkedInLink={<a href="https://www.linkedin.com/in/sergey-cleftsow/">Sergei Klevtsov</a>}
            duties='Ideation, research, writing, web development, developing and pitching video concepts, scriptwriting, and storyboarding.'
            telegramLink='https://t.me/srgg6701'
          />
          <LiSection
            linkedInLink={<a href="https://www.linkedin.com/in/daniil-klevtsov-633a1a235/">Daniil Klevtsov</a>}
            duties='Filming and directing video shoots, ensuring the technical quality of the final product, managing production timelines, incorporating feedback and making revisions, publishing, and promoting videos across various platforms.'
            telegramLink='https://t.me/Dadine3k'
          />
        </ul>
        <Image className='width42' alt="Pluto and Rabbit" title='Pluto and Rabbit' src={imgCreators} />
      </section>
      <section>
        <br />
        <p><strong>Sergei</strong> is a final-year student in the Master&apos;s program in Public Policy at EHU. After graduation, he plans to pursue a PhD in Philosophy. Currently, he works as a Senior Analyst, Research Fellow, and IT Expert at Accenture Baltics. He lives in Latvia.</p>
        <p>He regularly participates in international scientific conferences in philosophy, political science, sociology, social theory, public administration, sustainable development, and interdisciplinary fields.</p>
        <p>Additionally, he writes for the Medium platform. You can <a href='https://medium.com/@sergeykleftzov'>follow him</a> and <a href='https://sergeykleftzov.medium.com/subscribe'>subscribe</a> to his newsletter to receive his original articles. These articles provide a comprehensive analysis of the problems facing modern and future societies, covering topics from psychology and religion to art and technology.</p>
        <p>His primary passion is philosophy, particularly in metaphysics, philosophy of mind, philosophy of AI, and political philosophy. He is also deeply engaged in studying current social issues in the context of the rapid technological advancements impacting our world.</p>
        <br />
        <p><b>Daniil</b> is a professional photographer, video producer, and musician (and <a href='https://srgg6701.github.io/Music-Is-My-Life/' target='_blank'><strong><em>music is his life</em></strong>)</a>.
        He lives in Germany.</p>
      </section>
      <section>
        <h3>Our Mission</h3>
        <p>We see our mission as helping humanity transition into a new era, preserving and enhancing humanistic values, and further evolving the human mind. </p>
        <h3>Collaboration with us</h3>
        <p>As part of our mission fulfillment, we offer collaboration in scientific research in the humanities and the creation of digital artworks, including web applications, audio, video, etc., both on a commercial basis and for free.</p>
      </section>
    </PageWrapper>
  )
}