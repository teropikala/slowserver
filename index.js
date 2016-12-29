//Lets require/import the HTTP module
var http = require('http');
var sleep = require('sleep');

//Lets define a port we want to listen to
const PORT=8888; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.setHeader('Connection', 'Transfer-Encoding');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Transfer-Encoding', 'chunked');
	
	//response.write('Response started, will wait 5 seconds now...<br/>');
    sleep.sleep(15)//sleep for 15 seconds
    response.write('It Works!!<br/><br/> Path Hit: ' + request.url);
	response.end();
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
