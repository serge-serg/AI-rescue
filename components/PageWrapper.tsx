'use client';
import React from 'react';
import pageMetadata from '@/app/pageMetadata';
import { getPagePath } from '@/utils/getPagePath';
import Link from 'next/link';

type PageWrapperProps = {
  children: React.ReactNode;
  filename: string;
  filenamePDF?: string;
};

const PageWrapper = ({ children, filename, }: PageWrapperProps) => {
  const path = getPagePath(filename);
  const { heading } = pageMetadata[path];
  let filenamePDF = heading;
  if (filenamePDF.endsWith("?")) {
    filenamePDF = filenamePDF.slice(0, -1);
  }
  const keys = Object.keys(pageMetadata);
  const pageIndex = keys.indexOf(path) + 1;

  return (
    <div style={{ paddingBottom: '3rem' }}>
      <h1>{heading}</h1>
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        borderBottom: 'solid 1px #999',
      }}>
        <div>
          <a href={`https://serge-serg.github.io/superintelligence-challenge/${pageIndex}. ${filenamePDF}/${filenamePDF}.pdf`} target="_blank">Download PDF</a>
        </div>
        <div>
          <Link href="/lets-connect">Let&apos;s Connect</Link>
        </div>
      </section>
      {children}
    </div>
  );
};

export default PageWrapper;