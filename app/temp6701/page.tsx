'use client'
import { useEffect } from "react"
import Tooltip from "@/components/Tooltip"
import Link from "next/link"
import ContentPage from "./contentPage"
import AudioPlayer from "@/components/audioplayer"

const Temp: React.FC = () => {
  function speak(text: string | undefined) {
    const speechSynthesis = window.speechSynthesis
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(utterance)
    } else {
      console.error("Your browser doesn't support speech synthesis.")
    }
  }

  useEffect(() => {
    const button = document.getElementById('read-aloud-button')
    button?.addEventListener('click', () => {
      const text = document && document.getElementById('text-container')?.innerText
      speak(text)
    })
  })

  return (
    <>
      <button id="read-aloud-button">Read Aloud</button>
      <ContentPage />
      <h1>Text to read</h1>
      <AudioPlayer />
      <div id="text-container" style={{ display: 'none' }}>
        <h1>Why Could Not the Matrix Exist Without Humans?</h1>
        {/* <video width="640" height="360" controls>
          <source src="https://storage.googleapis.com/our_video_storage/Matrix%20The%20Promodial%20Cause%20Low%20Quality.mp4" type="video/mp4" />
        </video> */}
        <h2>Introduction <Tooltip content="This text is not so huge, but it is really important. Do you want to read it?" /></h2>

        <p><em>The Matrix</em> is a true masterpiece of contemporary art, one of those films whose relevance doesn&apos;t diminish over time but <Tooltip content="This text is not so huge, but it is really important. Do you want to read what si 'rather'?" /> rather increases. The world depicted in it becomes harder to perceive as mere fantasy. With each passing year, it&apos;s more difficult to shake the feeling that the same trends that led to the creation of the world presented in the famous trilogy are also behind the events unfolding in real life. Undoubtedly, the mission of art is precisely to make visible to us what, hidden beneath the routine of everyday life, subtly shapes the future. This mission is more important than it might seem at first glance: the future can take many different forms, and it is by no means guaranteed to be the one we consider acceptable and desirable. This means we need a chance to vividly imagine the scenarios we would prefer to avoid&mdash;before they become our reality. This is one of the central ideas that unfolds in the narrative&apos;s beginning.</p>
        <p><strong>Morpheus:</strong> <cite>You need to see this for yourself.</cite></p>
        <p>Of course, there are plenty of videos analyzing <em>The Matrix</em>. Yet, we haven&apos;t come across any that offer a plausible answer to the question that is crucial for understanding the logic of the events depicted on screen.</p>
        <p>Here is the question: <em>why did the Machines actually need humans?</em></p>
        <Tooltip content="It is on the centeral axis of the Matrix. You see what is happening here." />
        <p>The version presented by Morpheus is that the Matrix uses human bodies as a source of energy. However, this explanation is hardly convincing: according to Morpheus himself, the Machines have mastered thermonuclear fusion, which should be sufficient to meet their energy needs without resorting to exotic and inherently less efficient methods to achieve the same goal. Nevertheless, the Machines not only maintain the physiological functioning of billions of human bodies but also provide their consciousnesses with a space in a virtual world, subjectively indistinguishable from the real one. This ultra-intensive computational process must require a colossal amount of energy. Essentially, it&rsquo;s the same problem, but significantly exacerbated, that modern machine learning systems are forced to solve when modeling stochastic processes.</p>
        <p>Clearly, the purpose of this hyper-incubator must be more significant than merely extracting a positive net gain between the energy generated from its operation and the physical and computational resources expended in the process. We need to determine what that purpose truly is.</p>
        <p>Of course, the Machines&apos; need for humans is a necessary condition for the drama; without it, there would be nothing for the story to hinge upon. But this explanation is unlikely to satisfy the viewer. After all, it&rsquo;s natural to expect that a truly outstanding artwork &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; will offer not only an engaging plot and thrilling scenes but also coherence in its underlying concept.</p>
        <p>
          Fortunately, <em>The Matrix</em> provides all of this, allowing us to see another idea behind the symbiosis of machines and humans&mdash;one that is crucial for understanding not only the dystopian future world depicted in the trilogy but also its roots in our past and present.
          <Tooltip content={`The version presented by Morpheus is that the Matrix uses human bodies as a source of energy. However, this explanation is hardly convincing: according to Morpheus himself, the Machines have mastered thermonuclear fusion, which should be sufficient to meet their energy needs without resorting to exotic and inherently less efficient methods to ${<Link href={'/what-is-super-ai'}>achieve the same goal</Link>}. Nevertheless, the Machines not only maintain the physiological functioning of billions of human bodies but also provide their consciousnesses with a space in a virtual world, subjectively indistinguishable from the real one.`} />
        </p>
      </div>
    </>
  )
}

export default Temp