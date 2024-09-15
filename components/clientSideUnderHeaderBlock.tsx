'use client';
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import AudioPlayer from "@/components/audioplayer"
import iconPdf from '@/assets/images/icons/pdf-24.png'
import iconConnect from '@/assets/images/icons/connect.svg'

const ClientSideUnderHeaderBlock = ({ pageIndex, filenamePDF, underHeaderBlock = [] }: { pageIndex: number, filenamePDF: string, underHeaderBlock: string[] }) => {
  const searchParams = useSearchParams()
  const paramValue = searchParams.get('test-audio')
  if (paramValue) console.log('url param?', paramValue)
  return (
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
        {(!Array.isArray(underHeaderBlock) || !underHeaderBlock.includes('no-audio')) && <AudioPlayer />}
      </div>
      <div className="under-header-inside" style={{ display: 'flex', gap: '2rem' }}>
        {(!Array.isArray(underHeaderBlock) || !underHeaderBlock.includes('no-pdf')) && <div className="under-header-block">
          <a href={`https://serge-serg.github.io/superintelligence-challenge/${pageIndex}. ${filenamePDF}/${filenamePDF}.pdf`} target="_blank">
            <Image src={iconPdf} alt="Download PDF" style={{ display: 'inline-block', marginBottom: '4px', marginRight: '4px' }} />Download PDF</a>
        </div>}
        <div className="under-header-block">
          <Link href="/lets-connect">
            <Image width={24} height={24} src={iconConnect} alt="Let's connect" style={{ display: 'inline-block', marginBottom: '4px', marginRight: '4px', }} />Let&apos;s Connect!</Link>
        </div>
      </div>
    </section>
  )
}

export default ClientSideUnderHeaderBlock;