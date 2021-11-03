const spinner1 = () => {
  let t = 100;
  let elms = ['\\', "|", "-", "/", "\n"];
  for (const i of elms) {
    let j = "\r" + i;
    setTimeout(() => process.stdout.write(j), t);
    t += 200; 
  }
};

spinner1();

/*
// process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...
*/