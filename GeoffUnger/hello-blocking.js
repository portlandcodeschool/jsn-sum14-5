/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/15/14
 * Time: 2:11 PM
 */

var fs = require('fs');
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');
