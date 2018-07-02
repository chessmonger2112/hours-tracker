var fs = require('fs');
var dateFormat = require('dateformat');

var currentDay = dateFormat(new Date(), "yyyy-mm-dd");
var startTime = dateFormat(new Date(), "hh:MM:ss");

var dayFolder = './' + currentDay;

if (!fs.existsSync(dayFolder)){
  fs.mkdirSync(dayFolder);
}

var sessionFolder = dayFolder + "/session " + startTime;
fs.mkdirSync(sessionFolder);
