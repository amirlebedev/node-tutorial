const os = require('os');

const user = os.userInfo();
// console.log(user);

const time = os.uptime();
// console.log(time / 60 / 60 / 24);

const currentOS = {
  name: os.type(),
  release: os.release(),
};

console.log(currentOS);
