load("http.js"); //this loads the http libraries which you will need to make requests to the web server
load("sbbsdefs.js"); // i  always load this when making stuff for synchronet don't know why
//var wungrndAPIkey = "xxxxx"; // put your wunderground API key here
	
function forecast() {
        var req= new HTTPRequest();
		var req2= new HTTPRequest();
        var current = req.Get("http://api.wunderground.com/api/" + wungrndAPIkey + "/conditions/q/autoip.json?geo_ip=" + user.ip_address);
        var forecast = req2.Get("http://api.wunderground.com/api/" + wungrndAPIkey + "/forecast/q/autoip.json?geo_ip=" + user.ip_address);
		var cu = JSON.parse(current);
		var fc = JSON.parse(forecast);
		console.clear();
		bbs.menu("weather/" + cu.current_observation.icon);
		console.gotoxy(20,2);
		console.putmsg(wh + "Location: " + sv + cu.current_observation.display_location.full);
		console.gotoxy(20,3);
		console.putmsg(wh + "Current Conditions: " + sv  + cu.current_observation.weather);
		console.gotoxy(20,4);
		console.putmsg(wh + "Temp: " + sv  + cu.current_observation.temperature_string);
//		console.putmsg(wh + "\r\n\r\n Forecast:");
		for (i = 0; i < fc.forecast.simpleforecast.forecastday.length; i++) {
		console.gotoxy(5+i*20,6);
		console.putmsg(wh + fc.forecast.simpleforecast.forecastday[i].date.weekday);
		console.gotoxy(5+i*20,7);
		console.putmsg(sv + fc.forecast.simpleforecast.forecastday[i].conditions);
		console.gotoxy(5+i*20,8);
		console.putmsg(bl +  fc.forecast.simpleforecast.forecastday[i].low.fahrenheit
				+ " / " + rd + fc.forecast.simpleforecast.forecastday[i].high.fahrenheit);
		}
		console.gotoxy(60,9);
        console.putmsg(gy + "syncWX." + sv + "nolageek");
        console.crlf();
		console.gotoxy(42,10);
        console.putmsg(gy + "icons." + sv + "hellbeard" + gy +
                " data." + sv + "wunderground"); 
    }
	
 //  console.putmsg("TEST" + JSON.stringify(weather.forecast()));

//current();
forecast();
	//	console.pause();
 