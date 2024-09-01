'use client';
import React from 'react';
import pageMetadata from '@/app/pageMetadata';
import { getPagePath } from '@/utils/getPagePath';

type PageWrapperProps = {
  children: React.ReactNode;
  filename: string;
};

const PageWrapper = ({ children, filename }: PageWrapperProps) => {
  const path = getPagePath(filename);
  const { heading } = pageMetadata[path];

  return (
    <div style={{ paddingBottom: '3rem' }}>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

export default PageWrapper;