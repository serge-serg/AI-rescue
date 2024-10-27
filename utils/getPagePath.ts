import { sep } from 'path';

export function getPagePath(filename: string): string {
  const relativePath = filename.replace(process.cwd(), '');
  let path = relativePath
    .split(sep + 'app')[1] // Разделим по директории "app", независимо от OS-разделителя
    .replace(/\\+/g, '/')  // Заменим все обратные слэши на прямые, чтобы путь был Unix-совместимым
    .replace(/\/page\.(js|ts)x?$/, '')  // Удалим "page.js" или "page.tsx" в конце
    .replace(/^\//, '');  // Удалим начальный слэш, если есть
  
  path = `/${path}`;  // Добавим ведущий слэш для совместимости с ключами `pageMetadata`
  console.log('Generated path:', path); // Выводим для отладки
  return path;
}
