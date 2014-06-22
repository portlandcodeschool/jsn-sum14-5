/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/15/14
 * Time: 2:12 PM
 */

var fs = require('fs');

var myCallback = function(err,contents){
    console.log(contents);
}

fs.readFile('/etc/hosts', myCallback);

console.log('Doing something else');