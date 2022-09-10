const http = require("http")
const url = "https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=47b93f5c14fab3562babe4293c8388ce&units=metric";
const server = http.createServer(function(request,response){
var request = require("request");
request(url, function(err, res, body) {
const data = JSON.parse(body);
    response.write("<h1>"+ 'City Name : ' + data['name'] + '<br>' + "</h1>");
    response.write("<h2>"+ 'Temperature : ' + data.main['temp'] + '<br>' + "</h2>");
    response.write("<h2>"+ 'Sunset Time : ' + new Date(data.sys['sunset']*1000) + "</h2>");
    response.end();
    });
})
server.listen(3010, () => console.log('listening to the port 3010...'));