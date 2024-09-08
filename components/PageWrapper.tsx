'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pageMetadata from '@/app/pageMetadata'
import { getPagePath } from '@/utils/getPagePath';
import iconPdf from '@/assets/images/icons/pdf-24.png'
import iconConnect from '@/assets/images/icons/connect.svg'
import AudioPlayer from "@/components/audioplayer"

const UnderHeaderBlock = ({ pageIndex, filenamePDF }: { pageIndex: number, filenamePDF: string }) => (
  <section style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    paddingBottom: '1.15rem',
    borderBottom: 'solid 1px #999',
  }}>
    <div className="audio-wrapper under-header-inside">
      <AudioPlayer />
    </div>
    <div className="under-header-inside" style={{ display: 'flex', gap: '2rem' }}>
      <div className="under-header-block">
        <a href={`https://serge-serg.github.io/superintelligence-challenge/${pageIndex}. ${filenamePDF}/${filenamePDF}.pdf`} target="_blank">
          <Image src={iconPdf} alt="Download PDF" style={{ display: 'inline-block', marginBottom: '4px', marginRight: '4px' }} />Download PDF</a>
      </div>
      <div className="under-header-block">
        <Link href="/lets-connect">
          <Image width={24} height={24} src={iconConnect} alt="Let's connect" style={{ display: 'inline-block', marginBottom: '4px', marginRight: '4px', }} />Let&apos;s Connect!</Link>
      </div>
    </div>
  </section>)

type PageWrapperProps = {
  children?: React.ReactNode;
  filename: string;
  filenamePDF?: string;
  underHeaderBlock?: boolean;
};
// get path
const getPageWrapperData = ({ filename }: PageWrapperProps) => {
  const path = getPagePath(filename)
  const { heading } = pageMetadata[path]
  let filenamePDF = heading;
  if (filenamePDF.endsWith("?")) {
    filenamePDF = filenamePDF.slice(0, -1);
  }
  const keys = Object.keys(pageMetadata);
  const pageIndex = keys.indexOf(path) + 1;
  return { heading, pageIndex, filenamePDF }
}

const PageWrapper = ({ children, filename, underHeaderBlock = true }: PageWrapperProps) => {
  const { heading, pageIndex, filenamePDF } = getPageWrapperData({ children, filename })
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <h1>{heading}</h1>
      {underHeaderBlock !== false && <UnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} />}
      {children}
    </div>
  );
};

const setUnderHeaderBlock = ({ children = <></>, filename }: PageWrapperProps) => {
  const { pageIndex, filenamePDF } = getPageWrapperData({ children, filename })
  return <UnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} />
}

export default PageWrapper;
export { setUnderHeaderBlock };