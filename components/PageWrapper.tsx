import React, { Suspense } from 'react'
import pageMetadata from '@/app/pageMetadata'
import { getPagePath } from '@/utils/getPagePath'
import ClientSideUnderHeaderBlock from '@/components/clientSideUnderHeaderBlock'

type PageWrapperProps = {
  children?: React.ReactNode
  filename: string
  filenamePDF?: string
  underHeaderBlock?: boolean | string[]
}

const getPageWrapperData = ({ filename }: PageWrapperProps) => {
  const path = getPagePath(filename)
  const { heading } = pageMetadata[path]
  let filenamePDF = heading
  if (filenamePDF.endsWith("?")) {
    filenamePDF = filenamePDF.slice(0, -1)
  }
  const keys = Object.keys(pageMetadata)
  const pageIndex = keys.indexOf(path) + 1
  let headerID = ''
  if (path) {
    const parts = path.split('/')
    if (parts.length > 0) {
      parts.shift()
      headerID = parts.join('-') || 'homepage'
    }
  }
  return { headerID, heading, pageIndex, filenamePDF }
}

const checkUnderHeaderBlockType = ({ underHeaderBlock }: Pick<PageWrapperProps, 'underHeaderBlock'>): string[] => (Array.isArray(underHeaderBlock)? underHeaderBlock : [])

const PageWrapper = ({ children, filename, underHeaderBlock = true }: PageWrapperProps) => {
  const { headerID, heading, pageIndex, filenamePDF } = getPageWrapperData({ children, filename })
  const underHeaderBlockExceptions = checkUnderHeaderBlockType({underHeaderBlock})
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <h1 id={`title-${headerID}`}>{heading}</h1>
      {underHeaderBlock !== false && (
        <Suspense fallback="...Loading...">
          <ClientSideUnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} underHeaderBlock={underHeaderBlockExceptions} />
        </Suspense>
      )}
      {children}
    </div>
  )
}

const setUnderHeaderBlock = ({ children = <></>, filename, underHeaderBlock = true }: PageWrapperProps) => {
  const { pageIndex, filenamePDF, } = getPageWrapperData({ children, filename })
  const underHeaderBlockExceptions = checkUnderHeaderBlockType({underHeaderBlock})
  return <ClientSideUnderHeaderBlock pageIndex={pageIndex} filenamePDF={filenamePDF} underHeaderBlock={underHeaderBlockExceptions} />
}

export default PageWrapper
export { setUnderHeaderBlock }