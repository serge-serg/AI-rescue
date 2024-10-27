import { sep } from 'path';

export function getPagePath(filename: string): string {
  const relativePath = filename.replace(process.cwd(), '')
  const spl = relativePath.split(sep + 'app')[1]
  console.log('getPagePath *** relativePath', relativePath, spl)
  let path = relativePath
    .split(sep + 'app')[1]
    .replace(/\\+/g, '/')
    .replace(/\/page\.(js|ts)x?$/, '')
    .replace(/^\//, '');
  
  path = `/${path}`;
  console.log('Generated path:', path);
  return path;
}
