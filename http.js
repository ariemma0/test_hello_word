


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



console.log('Server running at ');
