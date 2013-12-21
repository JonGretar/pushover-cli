#!/usr/bin/env node
var fs = require('fs');
var push = require('pushover-notifications');
var pkg = require('../package.json');

var argv = require('optimist')
	.options('?', {alias:'help', default:false})
	.options('V', {alias:'version', default:false})
	.options('T', {alias:'token', default:process.env['PUSHOVER_TOKEN']})
	.options('u', {alias:'user', default:process.env['PUSHOVER_USER']})
	.options('s', {alias:'sound', default:process.env['PUSHOVER_SOUND'] || false})
	.options('t', {alias:'title', default:process.env['PUSHOVER_TITLE'] || false})
	.options('p', {alias:'priority', default:process.env['PUSHOVER_PRIORITY'] || false})
	.argv;

if (argv.version) {
    console.log("Pushover-CLI "+pkg.version+"\n");
    return false;
}

if (argv.help) {
	console.log("Pushover-CLI "+pkg.version+"\n");
	fs.createReadStream(__dirname + '/USAGE.txt').pipe(process.stdout);
	return false;
}

if (!argv.token) {
	console.log("Pushover-CLI "+pkg.version+"\n");
	console.log("Token Missing.");
	console.log("Set the PUSHOVER_TOKEN variable or use the -T parameter");
	console.log("See 'pushover -?' for further info.");
	return false;
}
if (!argv.user) {
	console.log("Pushover-CLI "+pkg.version+"\n");
	console.log("User/Group Missing.");
	console.log("Set the PUSHOVER_USER variable or use the -u parameter");
	console.log("See 'pushover -?' for further info.");
	return false;
}

var p = new push( {
    user: argv.user,
    token: argv.token
});


var msg = { message: argv._[0] };

if (argv.title) msg.title = argv.title;
if (argv.sound) msg.sound = argv.sound;
if (argv.priority) msg.priority = argv.priority;

p.send(msg, function(err, result) {
	if (err || result.status === 0) return console.log("Error");
	console.log("Push Message Delivered");
});