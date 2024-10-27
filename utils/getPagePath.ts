import { join, sep } from 'path';

export function getPagePath(filename: string): string {
  console.log('Filename received:', filename);
  console.log('Current working directory:', process.cwd());
  
  const relativePath = filename.replace(process.cwd(), '');
  console.log('Relative path:', relativePath);

  const path = '/' + relativePath
    .split(sep + 'app')[1]
    .replace(/\\page\.(js|ts)x?$/, '')
    .replace(/\/page\.(js|ts)x?$/, '')
    .replace(/^\//, '');

  console.log('Generated path:', path);
  return path;
}
