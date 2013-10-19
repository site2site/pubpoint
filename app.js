#!/usr/bin/env node

var Spacebrew = require('./sb-1.3.0').Spacebrew,
    sb,
    config = require("./machine"),
    tumblr = require('tumblr.js');

var files_location = "files/";
var filepath = "./" + files_location;
var hosted_path = "http://api.sitetosite.co/modules/file-server/" + files_location;

var tumblr_client = tumblr.createClient({
  consumer_key: '',
  consumer_secret: '',
  token: '',
  token_secret: ''
});

var tumblr_defaults = {
      type: 'photo',
      caption: 'Flickr', 
      source: 'http://farm9.staticflickr.com/8294/7733962082_11a1834801.jpg'
    };

sb = new Spacebrew.Client( config.server, config.name, config.description );  // create spacebrew client object

sb.addSubscribe("url", "string", ""); 
sb.onCustomMessage = onCustomMessage;
sb.onOpen = onOpen;

function onCustomMessage( name, value, type ){
  switch(type){
    case "string":
      if(name == "url"){
        console.log('file url received: '+value);
        // tumblr_client.photo("pubpoint.tumblr.com", tumblr_defaults, function(err, json){
        //   console.log(err);
        //   console.log(json);
        // });
      }
  }
}


function onOpen(){
  console.log( "Connected through Spacebrew as: " + sb.name() + "." );
}