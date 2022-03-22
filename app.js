// const { readFileSync, writeFileSync } = require('fs');
const { readFile } = require('fs');

// const first = readFileSync('./content/subfolder/test.txt', 'utf8');

// console.log(first);

// writeFileSync('./content/subfolder/new.txt', 'hello world', { flag: 'a' });

readFile('./content/subfolder/test.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/subfolder/new.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(first);
    console.log(second);
  });
});
