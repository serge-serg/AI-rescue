const fontBold = { fontWeight: 700 };
const textColorMain = { color: 'var(--color-dark-rose)' };
const textColorMainBold = { ...textColorMain, ...fontBold };
//const textBoldOpacity = { opacity: 0.6, ...fontBold };
const textBoldLightGreen = { color: 'lightgreen', ...fontBold };
const textBoldDarkRed = { color: '#f00', opacity: 0.5, ...fontBold };
export default [
  { href: "/", text: "Toward the Point of No Return",},
  { href: "/will-superintelligence-become-the-great-filter-for-humanity", text: ["Will Superintelligence Become ",<span style={textColorMainBold}>Superintelligence </span>, "the Great Filter for Humanity?"] },
  {
    href: "/why-we-will-not-refuse",
    text: ["Why We Won't Refuse ", <>Creating <span style={textColorMainBold}>Superintelligence</span></>],
  },
  { href: "/deep-dive-into-fundamental-ai-risks", 
    text: ["Deep Dive into Fundamental ", <span style={textBoldDarkRed}>AI Risks</span>],
  },
  { // Bizarre Great Filter?
    href: "/can-superintelligence-be-inherently-friendly",
    text: [
      "Can ",
      <><span style={textColorMainBold}>Superintelligence</span> </>,
      <>Be <span style={textBoldLightGreen}>Friendly</span>?</>, 
    ],
  },
  {
    href: "/why-did-hal-decide-to-kill-all-the-discovery-astronauts",
    text: [
      <>
        Why Did <span style={textColorMainBold}>Hal9000</span> Decide to <span style={textBoldDarkRed}>Kill </span>All the Discovery Astronauts?
      </>,
    ],
  },
  {
    href: "/why-the-matrix-never-intended-to-destroy-human-race",
    text: <>Why <span style={textColorMainBold}>The Matrix</span> <span style={textBoldLightGreen}>Never</span> Intended To <span style={textBoldDarkRed}>Destroy</span> Human Race</>,
  },
  { href: "/we-need-your-opinion", text: "We need your opinion!" },
];
