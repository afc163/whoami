var name = require('git-user-name');
var email = require('git-user-email');
var result = name ? name : process.env.USER;

if (email) {
  result += ' <' + email + '>';
}

module.exports = result;
