var http = require('http'),
   express = require('express'),
    fs      = require('fs'),
    
    app     = express(),
    eps     = require('ejs'),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var html = "<!doctype html>" + 
  			 "\n<html>" + 
  			 "\n	<head>" + 
  			 "\n		<title>Demo HTTP Server</title>" + 
  			 "\n	</head>" + 
  			 "\n	<body>" + 
  			 "\n		<p>This is an HTML document</p>" + 
  			 "\n	</body>" + 
  			 "\n</html>";

  res.end(html);
}).listen(port , ip );


console.log('Server running at http://127.0.0.1:3000/');
