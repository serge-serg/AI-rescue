import React from 'react'
import dynamic from 'next/dynamic'
import pageMetadata from '@/app/pageMetadata'
import { getPagePath } from '@/utils/getPagePath';
import ClientSideUnderHeaderBlock from '@/components/сlientSideUnderHeaderBlock'

//const ClientSideUnderHeaderBlock = dynamic(() => import('./ClientSideUnderHeaderBlock'), { ssr: false });

type PageWrapperProps = {
  children?: React.ReactNode;
  filename: string;
  filenamePDF?: string;
  underHeaderBlock?: boolean;
};

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
      {underHeaderBlock !== false && <ClientSideUnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} />}
      {children}
    </div>
  );
};

const setUnderHeaderBlock = ({ children = <></>, filename }: PageWrapperProps) => {
  const { pageIndex, filenamePDF } = getPageWrapperData({ children, filename })
  return <ClientSideUnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} />
}

export default PageWrapper;
export { setUnderHeaderBlock };