const fs = require('fs');
const yaml = require('js-yaml');

try {
  const fileContents = fs.readFileSync('test.yaml', 'utf8');

  const data = yaml.load(fileContents);

  for (const [key, value] of Object.entries(data)) {
    console.log(`${key} : ${value}`);
  }
} catch (e) {
  console.error(e);
}
