var fs = require('fs');
var dateFormat = require('dateformat');

var currentDay = dateFormat(new Date(), "yyyy-mm-dd");
var startTime = dateFormat(new Date(), "hh:MM:ss");
var startDateTime = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");

var dayFolder = './' + currentDay;

if (!fs.existsSync(dayFolder)){
  fs.mkdirSync(dayFolder);
}

var sessionFolder = dayFolder + "/session " + startTime;
fs.mkdirSync(sessionFolder);

// fs.writeFile(sessionFolder, "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// });


fs.appendFile(sessionFolder + '/startFile.txt', startDateTime, function (err) {
  if (err) throw err;
  console.log('Saved!');
});




//write end time every n seconds
