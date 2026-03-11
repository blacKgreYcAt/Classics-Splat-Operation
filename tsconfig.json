
import fs from 'fs';
import path from 'path';

const lessonsDir = './src/data/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts'));

let allText = '';
files.forEach(file => {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const matches = content.match(/originalText:\s*"([^"]*)"/g);
  if (matches) {
    matches.forEach(m => {
      const text = m.match(/"([^"]*)"/)[1];
      allText += text;
    });
  }
});

const uniqueChars = Array.from(new Set(allText.split(''))).sort();
console.log(uniqueChars.join(''));
