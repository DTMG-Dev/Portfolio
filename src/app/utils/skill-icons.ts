export interface SkillIconMeta {
  svgUrl?: string;
  symbol: string;
}

const iconMap: Record<string, SkillIconMeta> = {
  'angular (8+)': { svgUrl: 'https://cdn.simpleicons.org/angular/DD0031', symbol: 'web' },
  'angular cli': { svgUrl: 'https://cdn.simpleicons.org/angular/DD0031', symbol: 'terminal' },
  'angular material': { svgUrl: 'https://cdn.simpleicons.org/materialdesign/757575', symbol: 'widgets' },
  rxjs: { svgUrl: 'https://cdn.simpleicons.org/reactivex/B7178C', symbol: 'sync_alt' },
  javascript: { svgUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E', symbol: 'javascript' },
  'react.js': { svgUrl: 'https://cdn.simpleicons.org/react/61DAFB', symbol: 'view_quilt' },
  'react js': { svgUrl: 'https://cdn.simpleicons.org/react/61DAFB', symbol: 'view_quilt' },
  '.net / asp.net web api': { svgUrl: 'https://cdn.simpleicons.org/dotnet/512BD4', symbol: 'dns' },
  'c#': { svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', symbol: 'code_blocks' },
  linq: { symbol: 'filter_alt' },
  'node.js / express': { svgUrl: 'https://cdn.simpleicons.org/nodedotjs/339933', symbol: 'lan' },
  python: { svgUrl: 'https://cdn.simpleicons.org/python/3776AB', symbol: 'data_object' },
  sql: { symbol: 'table_view' },
  mongodb: { svgUrl: 'https://cdn.simpleicons.org/mongodb/47A248', symbol: 'storage' },
  postman: { svgUrl: 'https://cdn.simpleicons.org/postman/FF6C37', symbol: 'send' },
  swagger: { svgUrl: 'https://cdn.simpleicons.org/swagger/85EA2D', symbol: 'rule' },
  'iot / arduino basics': { svgUrl: 'https://cdn.simpleicons.org/arduino/00979D', symbol: 'memory' },
  'machine learning': { symbol: 'psychology' },
  'machine learning with python': { svgUrl: 'https://cdn.simpleicons.org/python/3776AB', symbol: 'psychology' },
  iot: { svgUrl: 'https://cdn.simpleicons.org/arduino/00979D', symbol: 'memory' },
  'industrial iot': { svgUrl: 'https://cdn.simpleicons.org/arduino/00979D', symbol: 'precision_manufacturing' },
  'embedded programming': { symbol: 'memory' },
  arduino: { svgUrl: 'https://cdn.simpleicons.org/arduino/00979D', symbol: 'memory' },
  'api integration': { symbol: 'api' },
  'web development': { symbol: 'language' },
  'responsive web design': { symbol: 'devices' },
  'css flexbox': { symbol: 'view_quilt' },
  html: { svgUrl: 'https://cdn.simpleicons.org/html5/E34F26', symbol: 'html' },
  css: { svgUrl: 'https://cdn.simpleicons.org/css/1572B6', symbol: 'css' },
  bootstrap: { svgUrl: 'https://cdn.simpleicons.org/bootstrap/7952B3', symbol: 'design_services' },
  dom: { symbol: 'web_asset' },
  routing: { symbol: 'route' },
  'rest api': { symbol: 'api' },
  'rest apis': { symbol: 'api' },
  jwt: { symbol: 'verified_user' },
  'local storage': { symbol: 'save' },
  'state management': { symbol: 'account_tree' },
  'data structures': { symbol: 'dataset' },
  'problem solving': { symbol: 'lightbulb' },
  'git basics': { svgUrl: 'https://cdn.simpleicons.org/git/F05032', symbol: 'device_hub' },
  'semantic markup': { symbol: 'code' },
  accessibility: { symbol: 'accessibility' },
  'software foundations': { symbol: 'foundation' },
  'programming fundamentals': { symbol: 'code' }
};

function normalize(skill: string): string {
  return skill
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getSkillIconMeta(skillName: string, fallbackSymbol = 'code'): SkillIconMeta {
  const normalized = normalize(skillName);
  const direct = iconMap[normalized];

  if (direct) {
    return direct;
  }

  if (normalized.includes('angular')) return { svgUrl: 'https://cdn.simpleicons.org/angular/DD0031', symbol: 'web' };
  if (normalized.includes('react')) return { svgUrl: 'https://cdn.simpleicons.org/react/61DAFB', symbol: 'view_quilt' };
  if (normalized.includes('javascript')) return { svgUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E', symbol: 'javascript' };
  if (normalized.includes('python')) return { svgUrl: 'https://cdn.simpleicons.org/python/3776AB', symbol: 'data_object' };
  if (normalized.includes('mongodb')) return { svgUrl: 'https://cdn.simpleicons.org/mongodb/47A248', symbol: 'storage' };
  if (normalized.includes('c#')) return { svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', symbol: 'code_blocks' };
  if (normalized.includes('.net') || normalized.includes('asp.net')) {
    return { svgUrl: 'https://cdn.simpleicons.org/dotnet/512BD4', symbol: 'dns' };
  }
  if (normalized.includes('node')) return { svgUrl: 'https://cdn.simpleicons.org/nodedotjs/339933', symbol: 'lan' };
  if (normalized.includes('sql') || normalized.includes('database')) return { symbol: 'table_view' };
  if (normalized.includes('iot') || normalized.includes('embedded')) return { symbol: 'memory' };
  if (normalized.includes('machine learning') || normalized.includes('ai')) return { symbol: 'psychology' };
  if (normalized.includes('api')) return { symbol: 'api' };
  if (normalized.includes('responsive')) return { symbol: 'devices' };
  if (normalized.includes('security')) return { symbol: 'shield' };

  return { symbol: fallbackSymbol };
}
