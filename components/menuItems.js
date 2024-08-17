const fontBold = { fontWeight: 700 };
const textColorMain = { color: 'var(--color-dark-rose)' };
const textColorMainBold = { ...textColorMain, ...fontBold };
const textBoldOpacity = { opacity: 0.6, ...fontBold };
const textBoldDarkRed = { color: '#f00', opacity: 0.5, ...fontBold };
export default [
  { href: "/", text: "Toward the Point of No Return",},
  { href: "/great-filter", text: ["Is ",<span style={textColorMainBold}>Superintelligence </span>, "the Great Filter for Humanity?"] },
  {
    href: "/why-we-will-not-refuse",
    text: ["Why We Won't Refuse ", <>Creating <span style={textColorMainBold}>Superintelligence</span></>],
  },
  { href: "/deep-dive-into-ai-risks", 
    text: ["Deep Dive into ", <span style={textBoldDarkRed}>AI Risks</span>],
  },
  {
    href: "/can-superintelligence-be-safe",
    text: [
      "Can ",
      <><span style={textColorMainBold}>Superintelligence</span> </>,
      <>Be <span style={{ color: 'lightgreen', ...fontBold }}>Safe</span>?</>, 
    ],
  },
  {
    href: "/hal9000-vs-matrix",
    text: [
      <>
        Why <span style={textColorMainBold}>Hal-9000</span> Intended to <span style={textBoldDarkRed}>Kill All the Humans</span>,
      </>,
      <wbr />,
      <span style={{whiteSpace: 'nowrap'}}>&nbsp;but the <span style={textColorMainBold}>Matrix</span> <span style={textBoldOpacity}>Didn't</span></span>,
    ],
  },
  { href: "/we-need-your-opinion", text: "We need your opinion!" },
];
