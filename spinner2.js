const spinner1 = () => {
  let t = 100;
  let elms = ['\\', "|", "-", "/", "\n"];
  for (const i of elms) {
    let j = "\r" + i;
    setTimeout(() => process.stdout.write(j), t);
    t += 200; 
  }
};
