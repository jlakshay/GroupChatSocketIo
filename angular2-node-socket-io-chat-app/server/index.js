	"use strict";
	let express = require("express");
	let bodyParser = require ("body-parser");
	let cookieParser = require ("cookie-parser");
	let Debug = require ("debug");
	var path = require('path');
	let logger = require ("morgan");
	let chat_app = require('express')();
	let http = require('http').Server(chat_app);
	let io = require('socket.io')(http);
	let clientListNames = [];
	const db = require('mongoose');

	let index = require ('./routes/index');
	let group = require ('./routes/group');
	let register = require ('./routes/register');
	let login = require ('./routes/login');

	db.connect('mongodb://localhost/chat');
	const debug = Debug('server:app');
	chat_app.use(logger('dev'));
	chat_app.use(bodyParser.json());
	chat_app.use(bodyParser.urlencoded({
		extended: false
	}));

	chat_app.use(cookieParser());
	chat_app.use(express.static(__dirname, '/'));
	chat_app.use(express.static(__dirname, '/server/'));
	chat_app.use(express.static(__dirname + "/..", '/client/'));
	chat_app.use(express.static(__dirname + '/node_modules'));

	chat_app.use('/', index);
	chat_app.use('/groupchat', group);
	chat_app.use('/register',register);
	chat_app.use('/login',login);

	chat_app.get('/', function(req, res){
		res.sendFile(__dirname + '/index.html');
	});

	chat_app.get('/chat', function(req, res){
		res.redirect('/');
	});

	io.on('connection', function(socket){
		clientListNames.push(socket.handshake.query.userName);
		io.emit("updateSocketList", clientListNames);
		io.emit("addUserToSocketList",socket.handshake.query.userName);
		
		socket.on('disconnect', function(){
			let name=socket.handshake.query.userName;
			let userIndex = clientListNames.indexOf(socket.handshake.query.userName);
			if (userIndex != -1) {
				clientListNames.splice(userIndex, 1);
				io.emit("updateSocketList", clientListNames);
				io.emit("removeUserFromSocketList",name);
			}
		});

		socket.on('chatMessageToSocketServer', function(msg, func){
			func("Message recieved!",socket.handshake.query.userName);
			let name = socket.handshake.query.userName;
			let sockectObj = {name,msg}
			
			io.emit('broadcastToAll_chatMessage', sockectObj);
		});
	});

	http.listen(3000, function(){
		console.log('listening on *:3000');
	});

	module.exports = index;
