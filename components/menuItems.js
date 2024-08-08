const fontBold = { fontWeight: 700 };
export default [
  { href: "/", text: "Home" },
  {
    href: "/why-we-cant-give-up",
    text: ["Why We Can't Give Up", <>on Creating <span style={{color: 'var(--color-dark-rose)', fontWeight: 700}}>Superintelligence</span></>],
  },
  { href: "/scenarios", text: "Scenarios of Events" },
  {
    href: "/control-governance-alignment",
    text: "Control, Governance or Alignment?",
  },
  {
    href: "/hal9000-vs-matrix",
    text: [
      <>
        Why <span style={{color: 'var(--color-dark-rose)', ...fontBold }}>Hal-9000</span> Wanted to <span style={{ color: '#f00', opacity: 0.5, ...fontBold }}>Kill All Humans</span>,
      </>,
      <wbr />,
      <span style={{whiteSpace: 'nowrap'}}>&nbsp;but the <span style={{color: 'var(--color-green)', ...fontBold}}>Matrix</span> <span style={{ opacity: 0.4, ...fontBold }}>Didn't</span></span>,
    ],
  },
  { href: "/rescue-approaches", text: "Rescue approaches" },
  { href: "/we-need-your-opinion", text: "We need your opinion!" },
];
