let CronJob = require('cron').CronJob;

const request = require('request');

var job = new CronJob(
    '*/30 * * * * *',
    function() {
		// API call goes here
console.log("running a task every minute");
request('https://newsroute.herokuapp.com/v1/blog/blogchecks', function (error, response, body) {
   if (!error && response.statusCode == 200) {

   }
})},
	null,
	true,
	'America/Los_Angeles'
);

module.exports = job;