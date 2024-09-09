'use client'
import { useEffect, useRef } from 'react';

const MakeContactData = () => {
  const freeWill = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const inv = '&#70;&#101;&#101;&#108;&#32;&#102;&#114;&#101;&#101;&#32;&#116;&#111;&#32;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#32;&#117;&#115;&#32;&#97;&#116;&#32;';
    const invHow = '&#109;&#97;&#105;&#108;&#116;&#111;&#58;'
    const invWhere = '&#115;&#114;&#103;&#103;&#54;&#55;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'

    setTimeout(() => {
      if (freeWill.current) {
        freeWill.current.innerHTML = `${inv}<a href="${invHow}${invWhere}">${invWhere}</a>`;
      }
    }, 1000);
  }, [])
  return (
    <div style={{ marginTop: '1rem' }} id="free-will" ref={freeWill} />
  )
}
export default MakeContactData