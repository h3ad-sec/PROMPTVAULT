const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const PROMPTS_DIR = path.join(__dirname, '../data/prompts');
const OUTPUT = path.join(__dirname, '../data/prompts-manifest.json');

const CATEGORIES = ['triage', 'detect', 'intel', 'hunt', 'respond', 'analyze'];
const prompts = [];

for (const category of CATEGORIES) {
  const categoryDir = path.join(PROMPTS_DIR, category);
  if (!fs.existsSync(categoryDir)) continue;

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.yaml'));

  for (const file of files) {
    const filePath = path.join(categoryDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const prompt = yaml.load(content);
    prompt.file = `prompts/${category}/${file}`;
    prompts.push(prompt);
  }
}

const manifest = {
  generated: new Date().toISOString(),
  count: prompts.length,
  prompts
};

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2));
console.log(`Generated prompts-manifest.json — ${prompts.length} prompts across ${CATEGORIES.length} categories.`);
