//task 3 

var fs = require('fs');

fs.writeFile('welcome.txt', "Hello Node", function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 