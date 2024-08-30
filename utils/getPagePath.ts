import { join } from 'path';

export function getPagePath(filename: string): string {
  const relativePath = filename.replace(process.cwd(), '');
  return '/' + relativePath
    .split(join('app'))[1]
    .replace(/\/page\.(js|ts)x?$/, '')
    .replace(/^\//, '');
}