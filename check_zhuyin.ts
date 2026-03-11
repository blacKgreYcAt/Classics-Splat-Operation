
import fs from 'fs';
import path from 'path';

async function checkZhuyin() {
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

  const uniqueChars = new Set(allText.split(''));

  const lessonsContent = fs.readFileSync('./src/data/lessons.ts', 'utf-8');
  // Extract the dictionary part. This is a bit hacky but should work for our structure.
  const dictMatch = lessonsContent.match(/export const zhuyinDict: Record<string, string> = \{([\s\S]*?)\};/);
  if (!dictMatch) {
    console.error("Could not find zhuyinDict in src/data/lessons.ts");
    return;
  }

  const dictContent = dictMatch[1];
  const dictKeys = new Set();
  const keyMatches = dictContent.match(/"([^"]+)":/g);
  if (keyMatches) {
    keyMatches.forEach(m => {
      const key = m.match(/"([^"]+)":/)[1];
      // If it's a multi-char key, add each char
      for (const char of key) {
        dictKeys.add(char);
      }
    });
  }

  const missing = [];
  for (const char of uniqueChars) {
    if (!dictKeys.has(char) && !/[\s\w\d\p{P}]/u.test(char)) {
      // Ignore whitespace, alphanumeric, and punctuation
      missing.push(char);
    }
  }

  if (missing.length > 0) {
    console.log("Missing characters in zhuyinDict:");
    console.log(missing.join(''));
  } else {
    console.log("All characters are covered!");
  }
}

checkZhuyin();
