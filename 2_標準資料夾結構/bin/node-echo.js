var argv = require('argv'),
  echo = require('../lib/echo'),
  args = argv.run();

console.log(echo(args.targets.join(' ')));
