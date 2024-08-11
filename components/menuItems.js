const fontBold = { fontWeight: 700 };
const textColorMain = { color: 'var(--color-dark-rose)' };
const textColorMainBold = { ...textColorMain, ...fontBold };
export default [
  { href: "/", text: "Home" },
  {
    href: "/why-we-will-not-refuse",
    text: ["Why We Won't Refuse ", <>Creating <span style={textColorMainBold}>Superintelligence</span></>],
  },
  /* { href: "/scenarios", text: "Scenarios of Events" }, */
  {
    href: "/control-governance-alignment",
    text: [
      "Can ",
      <><span style={textColorMainBold}>Superintelligence</span> </>,
      <>be <span style={{ color: 'lightgreen', ...fontBold }}>Safe</span>?</>, 
    ],
  },
  {
    href: "/hal9000-vs-matrix",
    text: [
      <>
        Why <span style={textColorMainBold}>Hal-9000</span> Wanted to <span style={{ color: '#f00', opacity: 0.5, ...fontBold }}>Kill All Humans</span>,
      </>,
      <wbr />,
      <span style={{whiteSpace: 'nowrap'}}>&nbsp;but the <span style={textColorMainBold}>Matrix</span> <span style={{ opacity: 0.4, ...fontBold }}>Didn't</span></span>,
    ],
  },
  /* { href: "/rescue-approaches", text: "Rescue approaches" }, */
  { href: "/we-need-your-opinion", text: "We need your opinion!" },
];
