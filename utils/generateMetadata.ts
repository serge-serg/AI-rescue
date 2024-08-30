import type { Metadata } from 'next';
import pageMetadata from '@/app/pageMetadata';
import { getPagePath } from './getPagePath';

export function generateMetadata(filename: string): () => Promise<Metadata> {
  const path = getPagePath(filename);
  
  return async function (): Promise<Metadata> {
    return {
      title: pageMetadata[path].title,
      description: pageMetadata[path].description,
    };
  };
}