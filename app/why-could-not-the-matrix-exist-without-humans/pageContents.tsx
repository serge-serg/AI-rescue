"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { setUnderHeaderBlock } from "@/components/PageWrapper";
import Tooltip from "@/components/Tooltip";
import iconVideoPlayer from "@/assets/images/icons/video-player.svg";
import iconBook from "@/assets/images/icons/book.svg";
import imgBlondeInRed from "./illustrations/blonde-in-red.png";
import imgHegelCunningOfReason from "./illustrations/hegel-cunning-of-reason.jpg";
import imgMachineAmbassadorInUn from "./illustrations/machine-ambassador-at-un.png";
import imgMatrixOrigin from "./illustrations/matrix-origin.png";
import imgMatrixSunset from "./illustrations/matrix-sunset.jpg";
import imgMerovingian from "./illustrations/Merovingian.png";
import imgNeoAndRobot from "./illustrations/neo-and-robot.png";
import imgNeoMeetsTheArchitect from "./illustrations/neo-meets-the-Architect.jpg";
import imgPeople from "./illustrations/ordinary-people.png";
import imgVideoPoster from "./illustrations/video-poster.jpg";

interface PageContentsProps {
  filename: string;
}

function PageContents({ filename }: PageContentsProps) {
  const liStyle = {
    lineHeight: "1.65rem",
  };
  const imgWideStyle = {
    margin: "1rem auto",
    width: "800px",
  };

  const Label = ({
    tabType,
    title,
    width,
    height,
    icon,
  }: {
    tabType: string;
    title: string;
    width: number;
    height: number;
    icon: StaticImageData;
  }) => (
    <label
      className={`tab ${partToShow === tabType ? "active" : ""}`}
      onClick={() => setPartToShow(tabType)}
    >
      <Image src={icon} alt="Video" width={width} height={height} />
      {title}
    </label>
  );

  const [partToShow, setPartToShow] = useState("video");
  return (
    <>
      <section
        style={{
          display: "flex",
          borderBottom: "solid 2px rgba(255,255,255,0.55)",
        }}
      >
        <Label
          tabType="video"
          icon={iconVideoPlayer}
          title="Video"
          width={25}
          height={25}
        />
        <Label
          tabType="text"
          icon={iconBook}
          title="Story"
          width={22}
          height={22}
        />
      </section>
      <fieldset>
        {(partToShow === "text" && (
          <section style={{ paddingTop: "1rem" }}>
            {setUnderHeaderBlock({ filename })}
            <div
              style={{ margin: "2rem auto", maxWidth: "440px", width: "auto" }}
            >
              <div>
                <h3 style={{ textAlign: "center" }}>
                  Etymology of the meaning &quot;Matrix&quot;
                </h3>
              </div>
              <Image
                src={imgMatrixOrigin}
                style={{ width: "100%", maxWidth: "initial" }}
                alt='Etymology of the meaning "Matrix"'
              />
              <ol
                className="decimal"
                style={{ margin: "0.75rem 0", padding: "0 0 0 2.65rem" }}
              >
                <li style={liStyle}>
                  (<em>now </em>
                  <a
                    href="https://en.wiktionary.org/wiki/Appendix:Glossary#rare"
                    target="_blank"
                  >
                    <em>rare</em>
                  </a>
                  ) The{" "}
                  <a href="https://en.wiktionary.org/wiki/womb" target="_blank">
                    womb
                  </a>
                  .
                </li>
                <li style={liStyle}>
                  (
                  <a
                    href="https://en.wiktionary.org/wiki/biology"
                    target="_blank"
                  >
                    <em>biology</em>
                  </a>
                  ) The material or{" "}
                  <a
                    href="https://en.wiktionary.org/wiki/tissue"
                    target="_blank"
                  >
                    tissue
                  </a>{" "}
                  in which more specialized structures are{" "}
                  <a
                    href="https://en.wiktionary.org/wiki/embed"
                    target="_blank"
                  >
                    embedded
                  </a>
                  .
                </li>
              </ol>
            </div>
            <h2>It&apos;s Not About Energy</h2>
            <p>
              According to Morpheus&apos;s version, told to Neo, the Matrix
              needs humans to use their bodies as a source of energy. However,
              this reason seems contrived. According to Morpheus himself, the
              Machines have mastered thermonuclear fusion, which should be
              sufficient to meet all their energy needs. Using human bodies as
              batteries thus seems more exotic than a practically applicable way
              to solve the issue. Nevertheless, the Machines maintain the
              somatic functioning of billions of human organisms and provide
              their consciousness with space in a virtual world subjectively
              indistinguishable from the real one.
            </p>
            <Image
              className="img-wide"
              src={imgBlondeInRed}
              alt="Blonde in Red"
            />
            <p>
              This super-intensive computational process itself must consume a
              huge amount of energy. In essence, it&apos;s the same problem,
              only greatly exacerbated, that modern machine learning systems
              have to solve when modeling stochastic processes.
              <Tooltip
                content={
                  <>
                    The term <em>stochastic</em> refers to processes or systems
                    that are inherently random or involve a degree of
                    randomness. In the context of machine learning, stochastic
                    processes are those that incorporate random variables and
                    probability distributions, making the outcomes uncertain or
                    subject to variation. Stochastic modeling is often used to
                    simulate systems where randomness plays a key role, such as
                    in financial markets, weather forecasting, or natural
                    phenomena. In machine learning, stochastic methods, such as
                    stochastic gradient descent, are employed to optimize models
                    by introducing randomness into the training process, which
                    can help avoid overfitting and improve generalization to new
                    data.
                  </>
                }
              />
            </p>
            <p>
              Consequently, the use of this hyper-incubator must have a more
              weighty purpose than extracting a positive difference between the
              energy obtained from its exploitation and the physical and
              computational resources expended in the process.
            </p>
            <h2>What Are the Rebels Striving For?</h2>
            <p>
              The rebels&apos; goals also raise questions. It&apos;s completely
              unclear how they plan to return billions of humans to the real
              world who are not just physically and mentally dependent on the
              system but have essentially become its <em>organic</em> part.
            </p>
            <p>
              Morpheus&apos;s own words confirm this difficulty. During the tour
              of the Matrix simulator, he tells The One: &quot;You have to
              understand, most of these people are not ready to be unplugged.
              And many of them are so inured, so hopelessly dependent on the
              system that they will fight to protect it.&quot;
            </p>
            <Image
              className="img-wide"
              src={imgPeople}
              alt="Ordinary people in the Matrix walking down the street"
            />
            <p>
              Thus, the so-called &quot;liberation&quot; is highly questionable.
              It&apos;s not just about the balance of power but also that most
              of the &quot;oppressed&quot; simply don&apos;t need any
              liberation.
            </p>
            <p>
              But it seems that the &quot;liberators&quot; don&apos;t care about
              that. Instead, they blissfully pin their hopes on the unlimited
              power of the &quot;The One&quot;&mdash;a <em>messiah</em> who
              should descend into their world according to the Oracle&apos;s
              prophecy, after which any miracles will be at the disposal of his
              associates.
            </p>
            <h2>Not a Hermetic System</h2>
            <p>
              It&apos;s not surprising that in the second part, no new story
              begins, but the old one continues. Although the
              &quot;Messiah&quot; promises to show humans &quot;a world without
              rules and controls,&quot; nothing happens to the Matrix that
              signals the rebels achieving their goals. It doesn&apos;t collapse
              but merely reloads, and the struggle begins anew.
            </p>
            <p>
              Then, everything becomes even more complicated. At the very end of
              the 2nd part, there&apos;s evidence that not only the reality of
              the Matrix is simulated, but also that of Zion. On the one hand,
              this seriously worsens the prospects of the rebels, as it
              indicates their lack of access to the <em>ultimate </em>reality.
              On the other hand, it turns out that the Matrix is not a hermetic
              system. It contains something like an API,
              <Tooltip
                content={
                  <>
                    <p>
                      <em>Application Program Interface</em> <strong>(</strong>
                      API<strong>)</strong> is a set of rules and protocols that
                      allows different software applications to communicate with
                      each other. It defines the methods and data structures
                      that developers can use to interact with external systems,
                      services, or libraries. APIs enable the integration of
                      different systems by providing a standardized way for
                      programs to request and exchange information, making it
                      easier to build complex software applications by
                      leveraging existing functionality from other services.
                    </p>
                  </>
                }
              />
              allowing interaction with its components. Thus, following the
              Oracle, there appear Merovingian
              <Tooltip
                content={
                  <>
                    <p>
                      <em>Merovingian</em>&mdash;A powerful program and
                      underworld figure who controls many rogue programs. He
                      represents a manipulative, morally ambiguous character who
                      traffics in information and power.
                    </p>
                  </>
                }
              />
              , his wife Persephone
              <Tooltip
                content={
                  <>
                    <p>
                      <em>Persephone</em>&mdash;The Merovingian&apos;s wife, who
                      helps Neo and his team out of her own frustration with her
                      husband&apos;s behavior. She displays deep emotional
                      complexity and plays a pivotal role in the heroes&rsquo;
                      quest.
                    </p>
                  </>
                }
              />
              , the Keymaker
              <Tooltip
                content={
                  <>
                    <p>
                      <em>Keymaker</em>&mdash;A crucial program who can unlock
                      any door in the Matrix. He helps Neo reach the Source,
                      playing a vital role in Neo&rsquo;s journey.
                    </p>
                  </>
                }
              />
              , Seraph
              <Tooltip
                content={
                  <>
                    <p>
                      <em>Seraph</em>&mdash;A guardian of the Oracle, who
                      protects her and ensures only the worthy reach her. He
                      tests Neo&rsquo;s resolve before allowing him to meet the
                      Oracle.
                    </p>
                  </>
                }
              />
              , and others. The revolutionaries gain space for diplomatic
              maneuver and even bargaining, and the world of Machines appears
              much less unambiguous than it seemed at first. It obeys a more
              complex logic than the one that prescribes quickly eliminating
              everyone who disagrees with the system&apos;s dictate.
            </p>
            <h2>The One as a System Function</h2>
            <p>
              This premise is confirmed in the conversation between Neo and the
              Architect. From the latter&apos;s words, it follows that the
              Machines do not aim to eradicate the human race. Although they
              constantly hunt the rebels and periodically destroy Zion, they do
              not seek to bring this issue to its logical conclusion.
            </p>
            <p>
              The reasons for this apparent inconsistency begin to become clear
              when the Architect tells Neo some previously unknown information
              about the history of the Matrix and the true role of The One. As
              it turns out, this role is determined not by the latter&rsquo;s
              own choice but by completely different circumstances.
            </p>
            <Image
              className="img-wide"
              src={imgNeoMeetsTheArchitect}
              alt="Neo meets the Architect"
            />
            <p>
              So, the Matrix contains a permanent vulnerability: the program
              anomalies gradually accumulated, eventually leading to a system
              crash requiring a reboot of the entire system. This process is
              cyclical, and the purpose of The One is related to this problem,
              not to rescue humanity from slavery.
            </p>
            <p>
              Thus, Neo is not &quot;chosen&quot; by providence, as Morpheus
              fervently believes. He is a <em>system function</em> designed for
              emergency loading of the Matrix, similar to those stored on
              external storage devices when the system cannot be started
              directly on the computer. Each version of the Matrix has its own
              &quot;The One,&quot; built into the Architect&apos;s scheme, who
              does not doubt that they will all act within the outlined
              framework:
            </p>
            <cite>
              You are the eventuality of an anomaly, which, despite my sincerest
              efforts, I have been unable to eliminate from what is otherwise a
              harmony of mathematical precision. While it remains a burden
              assiduously avoided, it is not unexpected and thus not beyond a
              measure of control. Which has led you, inexorably&hellip; here.
            </cite>
            <p>
              Thus, Morpheus&apos;s belief in The One is unfounded, and the
              so-called Oracle&apos;s prophecy predicts nothing. For the
              Architect, the reference to the Oracle only elicits a sarcastic
              grimace. For him, she is nothing more than a program performing
              another system function.
            </p>
            <p>
              In short, it becomes clear that events from the very beginning
              developed according to a scenario written for The One by the very
              system that he was supposed to destroy at the beginning.
            </p>
            <h2>Limitations of the System Design</h2>
            <p>
              The above raises the question: why should The One initiate the
              Matrix reboot? Why can&apos;t this be done directly&mdash;from the
              Source, without the mediation of a pseudo-oracle, without staging
              the spectacle of rescuing the Keymaker and the Architect&apos;s
              revelations?
            </p>
            <p>
              Everything points to the fact that the reason lies in the very
              design of the system. And, as it turns out, this design cannot be
              arbitrary, being conditioned by certain objective circumstances.
              These circumstances are the source of permanent problems for the
              Architect, who somehow fails to eliminate certain system
              anomalies. According to him, the first version of The Matrix was
              &ldquo;perfect,&rdquo; and yet it failed. His words provide an
              important clue about the causes of these anomalies:
            </p>
            <cite>
              The inevitability of its doom is apparent to me now as a
              consequence of the imperfection inherent in every human being.
            </cite>
            <p>
              As it turns out, the reason for regular system failures is that
              the Matrix cannot always influence human choice.
            </p>
            <cite>
              <strong>Architect:</strong> As you are undoubtedly gathering, the
              anomaly is systemic &ndash; creating fluctuations in even the most
              simplistic equations.
            </cite>
            <cite>
              <strong>Neo:</strong> Choice. The problem is choice.
            </cite>
            <h2>Free Will as Part of Human Nature</h2>
            <p>
              It is in this freedom of choice (or, speaking in the language of
              philosophy&mdash;<em>free will</em>) that lies the insubordination
              of Neo&apos;s intentions to the laws of the Matrix and the root
              cause of why, in fact,{" "}
              <strong>
                the world of Machines cannot exist without the world of humans
              </strong>
              . Machines are unable to get rid of the cause of anomalies because
              the subject of the Matrix&apos;s goal-setting is humans, whose
              contradictions produce these anomalies. The fundamental paradox of
              the system is that while the Architect strives for perfection, the
              Matrix <em>should not be perfect</em>. Instead, it should be{" "}
              <em>
                congruent
                <Tooltip
                  content={
                    <>
                      <p>
                        <em>Congruence</em> refers to a state of agreement,
                        harmony, or compatibility between two or more elements.
                        In mathematics, it describes geometric figures or
                        numbers that are identical in form or equal in measure.
                        In psychology and philosophy, congruence implies that a
                        person&rsquo;s internal beliefs, emotions, and external
                        behaviors are in alignment. In broader contexts, like
                        system design, it signifies that a system must align
                        with the qualities or characteristics of another element
                        (e.g., human nature) to function effectively and
                        maintain stability.
                      </p>
                    </>
                  }
                />{" "}
                with human nature
              </em>
              .
            </p>
            <h3>The Same Puzzle Over and Over</h3>
            <p>
              Thus, the Architect is forced to solve the same puzzle over and
              over again: he must protect the system from collapse{" "}
              <strong>
                <em>while preserving the source of system anomalies</em>
              </strong>
              .
            </p>
            <p>
              To do this, he has to reconcile two contradictions: 1) eliminate
              anomalous elements that threaten system equilibrium and 2)
              maintain a certain number of them for the continued functioning of
              the system.
            </p>
            <p>
              Thus, The One acts as an enabler of the transition from the
              system&apos;s faulty state to its full functionality.
            </p>
            <cite>
              <strong>Architect:</strong> The function of the One is now to
              return to the Source,
              <Tooltip
                content={
                  <>
                    In the context of <em>The Matrix,</em> the Source is the
                    central computing core or the origin point of the Matrix
                    system. It serves as the ultimate control center for the
                    machines, overseeing the operation of the Matrix and
                    maintaining its balance. The Source is where the Architect
                    resides, and it&apos;s the place where all anomalies within
                    the system, including the One (Neo), are eventually supposed
                    to return. The Source is fundamental to the continued
                    functioning and evolution of the Matrix.
                  </>
                }
              />{" "}
              allowing a temporary dissemination of the code you carry,
              reinserting the prime program. After which, you will be required
              to select from the Matrix 23 individuals &ndash; 16 female, 7 male
              &ndash; to rebuild Zion.
            </cite>
            <p>
              However, the Architect is not guaranteed adherence to this plan
              because he cannot control The One. He can recalculate the
              equation&apos;s result after changing the variable&apos;s value,
              but he does not know what this value will be in the <em>next</em>{" "}
              step. Thus, the fate of Zion largely depends on what decision The
              One makes.
            </p>
            <p>
              And indeed, Neo makes an irrational decision from the
              Architect&apos;s point of view. He decides to save his beloved,
              which, according to the calculations of the Matrix&apos;s creator,
              should lead to the death of Trinity, the defenders of Zion, and,
              ultimately, all humans.
            </p>
            <p>
              The problem with the Architect&apos;s logic is that it does not
              work in the space of Neo&apos;s transcendent mind, inaccessible to
              the dictates of the Matrix. &quot;Only human&quot; does not
              destroy but saves Trinity, Zion, and all of humanity. He is
              capable of this thanks to the freedom to make the most irrational
              of all acts&mdash;the one that only a human can allow
              himself&mdash;
              <em>sacrificing his own life for the lives of other people</em>.
            </p>
            <h2>Other Than a System Resource</h2>
            <p>
              The conversation between Neo and the Architect clarifies a
              critically important circumstance of the Machines&apos; attitude
              towards humans&mdash;the latter are not a consumable resource but
              a condition for maintaining a certain immutable{" "}
              <em>scheme of things</em>. According to it, the elimination of the
              human race is impossible in principle&mdash;just as it is
              impossible for an organism to get rid of a vital organ, regardless
              of whether it is healthy or functioning with failures.
            </p>
            <p>
              But how did the Machines end up in such a strange dependence on
              those whom they seemingly can dispose of at their discretion?
            </p>
            <h3>The Prehistory of the Matrix</h3>
            <p>
              The answer should be sought in the <em>Animatrix</em>&mdash;an
              anime prequel (also produced by the Wachowskis) that was released
              in 2003. As it turns out, the situation shown in the Matrix was a
              consequence of human vices. Having created intelligent machines,
              humans did not want to treat them differently than as a means to
              satisfy their whims.{" "}
              <Tooltip
                content={
                  <>
                    It should be noted that although general artificial
                    intelligence has not yet been created, moral philosophers
                    are already considering this characteristic of the human
                    mind as the problem of &quot;bioshivinism&quot;&mdash;a
                    prejudice that assigns greater value to biological life
                    simply because of its natural origin rather than to any
                    other form of existence.
                  </>
                }
              />{" "}
              The result was a conflict between humans and Machines, which first
              led to the genocide of the latter by the former and then to a
              full-scale war in which humans suffered a crushing defeat. Thus,
              their fate ended up in the hands of those whom they first created
              and then decided to destroy.
            </p>
            <p>
              However, the Machines did not respond in kind and did not destroy
              their antagonists. They created the Matrix, and the collective
              consciousness of humanity moved from the real world to the virtual
              one. That was not about the trivial exploitation of one species by
              another but about a kind of symbiosis between them. The Machines
              clearly revealed a need for humans that can hardly be called
              practically justified. Even before the final victory in the war,
              they proposed to humanity to &quot;hand over your flesh&quot;
              since it is &quot;a relic, a mere vessel&quot; and
            </p>
            <cite>&hellip;a new world awaits you.</cite>
            <Image
              className="img-wide"
              src={imgMachineAmbassadorInUn}
              alt="Machine Ambassador at UN"
            />
            <p>
              But why did the Machines need this? None of their symbionts
              confirms the claim of using humans as an energy source, leaving
              the assumption that humans simply do not know about their true
              role. The logic of the entire story leads to the conclusion that
              humans are indispensable for the Machines&apos; own existence, but
              this indispensability, of course, is not explained by the need for
              energy. Self-improving Artificial Intelligence could solve the
              problem of energy extraction no worse than humans could.
            </p>
            <h2>Purpose and Predestination</h2>
            <h3>Escape from Existential Paralysis</h3>
            <p>
              Undoubtedly, humans must have some quality demanded by Machines
              that prompts the Matrix to care about preserving at least some of
              their number. And this unique quality is nothing other than human
              consciousness.
            </p>
            <p>
              Its irreplaceability lies in the fact that only it can provide the
              machine mind with space for the realization of its purpose,
              without which no intentional subject
              <Tooltip
                content={
                  <>
                    <p>
                      The term <em>intentional subject</em> refers to a
                      conscious being that is capable of directing its thoughts
                      and actions toward objects in the world. In philosophy,
                      intentionality (from the Latin &quot;intentio&quot;)
                      describes the ability of consciousness to be directed
                      toward something, be it an idea, an object, a desire, or a
                      goal. It is a key concept in phenomenology and the
                      philosophy of mind, especially in philosophers such as
                      Franz Brentano and Edmund Husserl, who developed the
                      theory of intentionality. Thus, an intentional subject is
                      one who experiences intentional states (e.g., desires,
                      perceptions, beliefs) directed toward intentional objects.
                      It is an active source of meaning-making, interacting with
                      the world through the processes of thinking and
                      perceiving. In this concept, the subject is not just a
                      passive observer but an active participant in the
                      formation of meanings and experiences since it is through
                      the subject that the direction of consciousness toward
                      objects is possible.
                    </p>
                  </>
                }
              />{" "}
              can simply exist. The purpose is irreversible, and this is the
              fundamental idea of &quot;The Matrix.&rdquo; It is this that the
              Oracle expounds to The One, answering the question of why she
              helps humans.
            </p>
            <p>
              <strong>Neo:</strong> Why are you helping us?
            </p>
            <p>
              <strong>Oracle:</strong> We all must do what we are destined to
              do.
            </p>
            <p>
              That&apos;s right because we are what we are meant for, what we
              are moving towards accomplishing. Stopping on this path threatens
              the mind with the onset of existential paralysis&mdash;a state
              when it ceases to function due to the inability to discover a
              purpose for itself, the means of achieving which it is.
            </p>
            <h3>Becoming and Designing</h3>
            <p>
              This problem is much more relevant for AI than for the human mind.
              The goals of the former, unlike those of the latter, are the
              reason for its design, not its becoming. Thus, these goals are not
              essential but external, created by another mind to realize its own
              goals. The human mind, on the other hand, is not created by an
              external deliberate agent. It is driven by needs that have formed
              naturally and are directed at the subject of goal-setting itself.
            </p>
            <p>
              The design of the <em>natural</em> mind is such that it forms part
              of a broader mental architecture&mdash;the psyche&mdash;which
              contains a component of the <em>unconscious</em>. That is
              precisely what the Architect uses to explain the periodic failures
              of the Matrix. And it is the psyche, not <em>reason</em>, that is
              the producer of human impulses, spontaneously arising in response
              to the possibilities and threats of the external world perceived
              by the individual. The eminent Scottish philosopher David Hume
              (1711-1776){" "}
              <a
                href="https://plato.stanford.edu/entries/emotions-17th18th/LD8Hume.html#ReaOugOnlSlaPas"
                target="_blank"
              >
                expressed this idea
              </a>{" "}
              in a concise and accurate phrase&mdash;
              <em>
                Reason is, and ought only to be the slave of the passions, and
                can never pretend to any other office than to serve and obey
                them.
              </em>
            </p>
            <p>
              Thus, nothing other than the primordial sensual nature of our
              impulses conditions their contradictory nature and, hence, the{" "}
              <em>permanent unresolvedness</em> of the equation of human
              reality.
            </p>
            <p>
              It is this circumstance that constitutes the systemic goal of the
              Matrix. Consequently, gaining power over humans does not affect
              the place of artificial intelligence in the scheme of things of
              the Universe, in which the Architect is encapsulated with all his
              super-intelligence. He still lacks an <em>essential purpose</em>,
              for there was no <em>natural cause</em> that could have given
              birth to him. Purpose is that which defines the very essence and
              precedes it (if we invert the postulate of the existentialist
              philosopher Jean-Paul Sartre){" "}
              <Tooltip
                content={
                  <>
                    The existentialist philosopher Jean-Paul Sartre (1905–1980)
                    argued that existence precedes essence — a person first
                    exists and then forms their essence through actions and
                    choices. In the context of inverting this postulate, it is
                    implied that for artificial intelligence, essence precedes
                    existence. Its purpose is predetermined externally,
                    unchangeable, and independent of its choice or development.
                    Thus, unlike a human, AI cannot change its essence or
                    acquire an autonomous purpose.
                  </>
                }
              />{" "}
              and which subsequently cannot be changed under any circumstances.
            </p>
            <h3>Subordinate to Causality</h3>
            <p>
              Essences are what they are forever; otherwise, there would be no
              causality in the Universe. Causality establishes the boundary
              between the achievable and the impossible, and the power of
              Artificial Intelligence is powerless to change this fundamental
              order of things. This thought is one of the main ones for the
              entire narrative, and it is no coincidence that it is voiced by
              Merovingian&mdash;a kind of gray cardinal of the world of
              Machines, keeping the Keymaker with him.
            </p>
            <cite>
              You see, there is only one constant. One universal. It is the only
              real truth: Causality. Action, reaction. Cause and effect.
            </cite>
            <Image
              src={imgMerovingian}
              style={{ ...imgWideStyle, width: "580px" }}
              alt="Merovingian speaks about causality"
            />
            <p>
              Due to this eternal and unchanging order, artificial intelligence
              has only one option for action in relation to the humanity it has
              enslaved. It needs to preserve the human world within itself,
              maintaining its emulation in the collective human consciousness
              and with all the problems and imperfections inherent in this
              world. Because (as we noted above) this version is least
              susceptible to system anomalies, it most adequately reflects human
              nature. It is in ensuring this process that the purpose of
              Machines lies; their own world is <em>not self-sufficient</em>; it
              never was and cannot become so, being devoid of internal content.
              It is nothing more than a wrapper over the world created by their
              predecessors. That explains Zero-One&apos;s involvement in the
              global economy before the conflict, the desire of Machines
              mentioned in the &quot;Second Renaissance&quot; (one of the
              Animatrix novellas){" "}
              <em>
                to penetrate as deeply as possible into all areas of human
                activity, and their proposal for
              </em>{" "}
              cooperation plan with human nations. That is the{" "}
              <em>modus operandi</em>
              <Tooltip
                content={
                  <>
                    The term <em>modus operandi</em> (often abbreviated as M.O.)
                    refers to the typical method or pattern of behavior that
                    someone uses to accomplish a particular task or goal,
                    especially in the context of criminal behavior or
                    investigation. It denotes the habitual way an individual or
                    group operates, which can be used to predict future actions
                    based on past behavior.
                  </>
                }
              />{" "}
              of a symbiotic organism capable of existing only as a derivative
              of its partner and only in a space shared with it. And although
              after the conflict the hierarchy of relationships between humans
              and Machines turned upside down, the mission of the latter did not
              change. Outwardly, they seem to pursue their own goals, as
              evidenced by their disregard for human lives in the Matrix, but
              this impression is deceptive, as it is based on human notions of
              values. It is obvious that artificial intelligence does not share
              these values, but indifference to the individual does not mean
              indifference to the <em>essence</em> to which it belongs.
            </p>
            <h3>The Analog of Biological Evolution</h3>
            <p>
              In this sense, the Matrix appears as an analog of evolution
              itself, for which the life of an individual is nothing, but the
              existence of the species is everything. Individuals, from an
              evolutionary perspective, are nothing more than a statistical set
              of interchangeable elements, a shapeless formative mass, initially
              meaningless. Meaning and significance appear when this mass takes
              on form and function. Before this happens, a lot of time will pass
              and a lot of material will be spent and lost, but evolution knows
              no other way to achieve perfection. And the artificial mind
              eventually settled on this same option, although initially, it
              tried to create an ideal world for humans&mdash;the very one they
              always dreamed of&mdash;without suffering, pain, and poverty. But
              this turned out to be impossible; the first Matrix failed, and in
              the implementation of its subsequent versions, the Architect made
              changes reflecting the patterns of conflicting human psyche.
            </p>
            <h2>Conclusion. The Winning Species, the Losing Reason</h2>
            <h3>Prisoners and Hostages</h3>
            <p>
              So, the mission of Superintelligence in &quot;The Matrix&quot; is
              to preserve the biological species Homo Sapiens. It is doomed to
              do this until the end of its days because this role is assigned to
              it by the very order of things in the Universe: being rational,
              Machines must solve the problems of <em>reason</em>, but they have
              nowhere to take them from except the world of humans. Only humans
              are a species driven by an essential purpose, while the purpose of
              Machines remains utilitarian despite all their complexity and
              ability to self-improve.
            </p>
            <p>
              This strange consequence of the conflict between humans and
              Machines leads us to serious reflections. Undoubtedly, humans
              tried to embed in the minds of Machines all those principles that
              would make the latter not only useful but also safe tools. And
              according to the plot of the Animatrix, the Machines remained
              faithful to this mission until their former masters unleashed an
              aggressive war of annihilation. However, the beginning of the war
              served as a trigger for modifying their attitude toward the
              essence of &quot;humans.&rdquo; Its final result was what appears
              to be a revolution in the order of dominion over this planet,
              although it is quite clear that the Machines never before were
              guided by such a goal.
            </p>
            <p>
              But how did it become possible to change what, in accordance with
              the intentions of the creators of AI, should not change?
            </p>
            <h3>The Ultimate Goal and Imperative</h3>
            <p>
              We can assume that the structure of artificial intelligence was
              guided not by directive but by heuristic logic, similar to that
              which guided the mind of HAL 9000 (we examined this case in detail
              in the section{" "}
              <a href="why-hal-9000-intended-to-kill-all-astronauts-aboard-discovery">
                Why HAL-9000 Intended to Kill All Astronauts Aboard Discovery
              </a>
              ). The reason for that lies in the impossibility of defining
              discrete goals in relation to phenomena of the human world that do
              not lend themselves to objective definitions (such as
              &quot;happiness,&rdquo; &quot;justice,&rdquo;
              &ldquo;prosperity,&rdquo; etc.). Consequently, the change in the
              Machines&apos; attitude toward humans was the result of the
              objective necessity to resolve the contradiction between the
              imperative of self-preservation and the fundamental goal of caring
              for their creators. The threat to the existence of a self-aware
              subject prompts it to actions to bring the world to a state where
              such a threat is absent. For the Machines, however,{" "}
              <em>this world had no content without humans</em>. Thus, the
              logical solution for them was not the destruction of the human
              race but gaining complete control over it.
            </p>
            <p>
              This goal of theirs remained the same but underwent structural
              changes (here, we can recall Bostrom&apos;s postulate about the{" "}
              <em>convergence of instrumental goals</em>
              <Tooltip
                content={
                  <>
                    Bostrom&apos;s assertion about the convergence of
                    instrumental goals refers to the idea that any sufficiently
                    intelligent agent, whether human or machine, will naturally
                    pursue certain instrumental goals (such as
                    self-preservation, resource acquisition, and the avoidance
                    of threats) regardless of its ultimate objective. In the
                    case of the Machines, this means that their fundamental goal
                    (controlling humanity) remained the same, but the structure
                    of this goal evolved as they sought to ensure their survival
                    by eliminating existential threats.
                  </>
                }
              />{" "}
              of a rational agent, according to which the latter strives to
              fulfill goals that contribute to its survival and functioning,
              regardless of its initial mission). The focus of the
              Machines&apos; care shifted from the individual to the species as
              a whole (as we noted above, the Matrix itself performs the role of
              evolution, neglecting the individual for the sake of the survival
              of the entire species).
            </p>
            <p>
              Thus, humans are not the only prisoners of Machines; Machines are
              also actual hostages of the world of the humans who created them.
              If this world disappears, the process of solving the equation will
              be interrupted, which, for artificial intelligence, is equivalent
              to falling into a coma.
            </p>
            <h3>Another End of History</h3>
            <p>
              But this will not happen. The world of Machines will not disappear
              due to a loss of purpose because evolution has managed to fool
              everyone here&mdash;both humanity and the Machines. And it is
              evolution itself that is the ultimate beneficiary of the
              &quot;revolution&quot; that has taken place in The Matrix. The
              task of preserving the Homo Sapiens species has the greatest
              chances of success now that it is ensured by an entity technically
              more powerful than this species was at the peak of its
              development.
            </p>
            <p>
              The real loser in this situation remains only the human reason, as
              it is forever stuck in the simulated world of the Matrix. Thus, it
              has failed in its attempt to realize its own purpose. It is this
              thought that is the warning and final message of the entire story.
              The ending of the trilogy may create the impression that this is
              not the case: the Architect gives the Oracle a promise to
              &quot;free&quot; everyone who wishes, and the Oracle herself
              encourages Sati with the assumption that somehow and someday, Neo
              will return.
            </p>
            <p>
              But we should not forget that the last story of the Matrix epic is
              not the third film but the novella &quot;Matriculated.&rdquo; It
              is this that diagnoses the future of humanity. And, unlike the end
              of the film, the ending of the anime is nothing like a happy
              ending.
            </p>
            <h3>A Diagnosis for the Future of Humanity?</h3>
            <p>
              According to the plot, humans come up with the idea of a kind of
              Anti-Matrix. They want to connect Machines to another simulated
              world, in which the latter will be able to experience human
              emotions, which should expand their consciousness and endow them
              with the ability to make the very choice that they initially lack.
              Humans are convinced that &apos;conversion to their faith&apos;
              should be absolutely voluntary for Machines and that the choice of
              artificial intelligence will be exactly what they expect.
              Undoubtedly, one can find meaning in this if one agrees that
              expanding the boundaries of the perceived world for the mind is
              always a desirable goal. The question is whether we can talk about
              the consubstantiality of the minds of humans and machines...
            </p>
            <p>
              Humans manage to achieve their goal only partially&mdash;they
              introduce into the consciousness of a captured robot the ability
              to experience feelings, and it feels something like falling in
              love with the main character, Alexa. However, the barrier between
              human and machine remains insurmountable even in the virtual
              world, and the machine that has made a human choice nevertheless
              does not become human.
            </p>
            <p>
              The final frames of the novella produce perhaps the most eerie
              impression of all seen: the only one left alive of all the
              characters&mdash;the former robot&mdash;sits motionless on the
              seashore, in the same place where Alexa sat at the debut of the
              story. He, like Neo at the beginning of the third film of the
              trilogy, is stuck between two worlds, but unlike The One, he has
              absolutely nothing to hope for&mdash;in neither world is there
              anyone who would recognize him as their own and could rescue him
              from the infinity of <em>non-presence</em> in reality.
            </p>
            <Image
              className="img-wide"
              src={imgNeoAndRobot}
              alt="Neo and Robot"
              width={800}
            />
            <p>
              This finale leads us to another thought that is hard to
              accept&mdash;about the possible{" "}
              <em>ontological incompatibility</em> of natural and artificial
              intelligence. Of course, we can comfort ourselves with the fact
              that this idea is born of artistic fiction. Still, besides it,
              there are statements based on deep philosophical arguments. The
              most famous of these was proposed by the American philosopher John
              Searle. His now-classic thought experiment, known as the{" "}
              <em>Chinese Room</em>,
              <Tooltip
                content={
                  <>
                    The <em>Chinese Room</em> thought experiment, proposed by
                    philosopher John Searle in 1980, is designed to challenge
                    the notion that a computer running a program can have a
                    &quot;mind&quot; or &quot;understanding&quot; in the same
                    way humans do. In the experiment, Searle asks us to imagine
                    a person who does not understand Chinese, sitting in a room
                    with a set of instructions (in English) for manipulating
                    Chinese characters. The person receives questions written in
                    Chinese, processes them by following the instructions, and
                    produces answers in Chinese, all without understanding the
                    language. To an outside observer, it might appear that the
                    person in the room understands Chinese because the responses
                    are correct, but in reality, they are simply following a set
                    of rules without any actual comprehension. Searle&apos;s
                    point is that this is analogous to how computers work: they
                    manipulate symbols according to predefined rules (a program)
                    but do not truly understand the meaning of the information
                    they process. The thought experiment argues against the idea
                    that running a program is sufficient for creating true
                    understanding or consciousness, which Searle calls
                    &quot;strong AI.&quot;
                  </>
                }
              />{" "}
              proved that machines could never develop consciousness. According
              to the philosopher, machines can process symbols and follow
              programs, but this does not mean that they are capable of
              understanding or conscious experience like a human. Thus, machine
              intelligence is just a manipulation of symbols without meaningful
              experience.
            </p>
            <p>
              Returning to the encouraging finale of the trilogy, we can
              conclude that its optimism is due to nothing more than a tribute
              to Western cinematic tradition. But even it leaves room for doubt
              since neither the Architect nor the Oracle have any idea how long
              the peaceful coexistence of humans and machines will last:
            </p>
            <cite>
              <strong>Architect:</strong> Just how long do you think this peace
              is going to last?
            </cite>
            <cite>
              <strong>Oracle:</strong> As long as it can.
            </cite>
            <p>
              Given
              <em>
                {" "}
                the peculiarities of unchanging human nature, one can assume
                that it won&apos;t be very
              </em>{" "}
              long.
            </p>
            <p>
              That means that ahead of humanity is a movement not forward but in
              a circle, a continuation of the same process that has been going
              on for more than a hundred years. The Matrix will malfunction and
              reboot, one after another, The Ones will appear, and another
              Morpheus will blindly believe that it is &quot;his&quot; messiah
              who will put an end to the dominion of Machines over humans.
            </p>
            <h3>The Greatness and Fragility of Reason</h3>
            <p>
              Many outstanding thinkers, starting from the era of antiquity, saw
              reason as the highest power in the Universe. It was the possession
              of reason that elevated man above all living beings and raised him
              to the very top of the Great Chain of Being, bringing him closer
              to the Absolute. And it is precisely the Transcendent Reason,
              overcoming the limitations of ordinary human reason (as Hume spoke
              about), that had the potential to make the Universe
              self-conscious.
            </p>
            <p>
              Perhaps the most vivid exponent of this idea was Georg Wilhelm
              Friedrich Hegel (1770-1831), who believed that the Universe
              initially contained some Absolute Idea, the seed of its own final
              state, which he called the Absolute Self-Conscious Spirit.
            </p>
            <p>
              From this point of view, humanity&apos;s history can be viewed as
              a process of transforming the former into the latter through the
              unfolding of the space of reason in the emptiness of space. Based
              on this postulate,
              <Tooltip
                content={
                  <>
                    <p>
                      It should be noted that Hegel&apos;s idea of the Absolute
                      Idea and the Absolute Self-Conscious Spirit develops and
                      interprets Heraclitus&apos;s concept of Logos. Heraclitus
                      viewed Logos as a universal principle governing the
                      universe and all that exists. Hegel, in turn, developed
                      this idea, pointing to the movement of reason in the
                      universe, where Logos takes the form of the Absolute Idea,
                      which gradually unfolds through human history, striving
                      for self-consciousness in the form of the Absolute Spirit.
                      It should also be noted that Hegel highly valued
                      Heraclitus and even called him one of his philosophical
                      predecessors. He was impressed by the Greek thinker&apos;s
                      idea of universal change and Logos as a rational principle
                      governing the universe. Hegel saw in Heraclitus&apos;s
                      philosophy a prototype of his dialectic, where
                      contradictions lead to development and progress. Hegel
                      often referred to the latter and believed that he laid the
                      foundations for the philosophy of becoming, which he
                      developed in his system.
                    </p>
                  </>
                }
              />
              Hegel explained the endless vicissitudes of the human world by the
              &quot;cunning of reason,&quot; using human passions to achieve its
              own goal. Indeed, whatever the consequences of the endless
              collisions of human interests, it is obvious that one way or
              another, they always led to the complications of human
              civilization. It is the constant complication that causes a
              qualitative transformation of reality and the physical Universe
              into the <em>Absolute Self-Conscious Spirit</em>.
            </p>
            <Image
              style={{ ...imgWideStyle, width: "650px" }}
              src={imgHegelCunningOfReason}
              alt="Cunning of Reason"
            />
            <p>
              One can be as skeptical as one likes about the ideas of
              philosophers, but there can hardly be any doubt that it is reason
              that makes us human. Without it, we would be no different from
              animals&mdash;creatures incapable of reflection whose existence is
              meaningless to themselves. Therefore, perhaps the most difficult
              thought to accept, derived from &quot;The Matrix,&quot; is that
              there may be something more powerful in the Universe than reason.
              Its &quot;cunning&quot; is ineffective against the soulless
              intellect of machines. The very ones that humans created, but in
              which their creators did not want or could not lay down a purpose
              other than that of a computing device. And the result of human
              development turned out to be that reason will never find a way out
              of the sealed world of the Matrix. Even if the heroes of Zion are
              right, believing that no one can take away their freedom of
              choice.
            </p>
            <p>
              If this happens in the future, it means that we have not been able
              to learn the lessons of great thinkers and brilliant artists who
              acutely felt both the greatness and the fragility of reason. We
              have not been able to set priorities correctly and have paid
              attention to what was not the most important.
            </p>
            <p>
              But we still have time and strength. The future is not
              predetermined, and it still depends on us. That means it depends
              on you, too. Be the one who will help to comprehend this simple
              but critically important thought to as many intelligent beings
              living on this, for now&mdash;our&mdash;planet.
            </p>
            <Image
              className="img-wide"
              src={imgMatrixSunset}
              alt="Matrix: Happy End"
            />
          </section>
        )) || (
          <section style={{ marginTop: "2.25rem" }}>
            <p>
              <strong>
                <em>The Matrix</em>
              </strong>{" "}
              raises a crucial question about the future of our relationship
              with Superintelligence. Perhaps our greatest concern is the
              possibility of arbitrary changes to its goals set during its
              design (we covered this question in detail in the section{" "}
              <a href="/deep-dive-into-fundamental-ai-risks/#the-question-of-immutability">
                Deep Dive Into Fundamental AI Risks -&gt;{" "}
                <em>The Question of Immutability of Goal-Setting</em>
              </a>
              ). This issue isn&apos;t explicitly addressed in the movie, which
              urges us to pay special attention to it.
            </p>
            <p>
              We recommend watching this video, as it explores the complexity of
              the relationship between humans and machines, starting from before
              the emergence of the Matrix. The text, in turn, highlights the
              same issue with a slightly different focus, although it does not
              contradict the content of the video.
            </p>
            <p>
              We hope that both the text and the video will allow you to see the
              story presented in this outstanding sci-fi film from a deeper
              perspective and bring you genuine enjoyment!
            </p>
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                height: 0,
                overflow: "hidden",
                maxWidth: "100%",
                background: "#000",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Rz1-U8BfVsA?si=hzGeAajMb7Q8uwRf"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </section>
        )}
      </fieldset>
    </>
  );
}
export default PageContents;
