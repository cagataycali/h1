var colors = require('colors');
var emoji = require('node-emoji');

module.exports = function() {
  console.log(colors.green('Add your awesome feature then run:'));
  console.log(colors.inverse(`g3l -m "Awesome feature" -b feature/awesomeFeature`));
  console.log(colors.green('All done! If you don\'t have g3l simply run'), colors.inverse('npm i -g g3l'));
}
