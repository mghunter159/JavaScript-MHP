fetch('https://api.openweathermap.org/data/2.5/weather?lat=58.0174&lon=56.2855&appid=25f89658c39ca5934efd0ac925fed826&units=metric')
.then(function(resp){return resp.json()})
.then(function(data) {
    console.log(data);
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temperature').textContent = Math.round((data.main.temp)) + '°';
    document.querySelector('.weather').innerHTML = data.weather[0]['description'];
    document.querySelector('.wind').innerHTML = data.wind.speed;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.country').innerHTML = data.sys.country;
    var sunrise = new Date(data.sys.sunrise * 1000);
        var hour = sunrise.getHours();
        var min = sunrise.getMinutes();
        var sec = sunrise.getSeconds();
            var sunrise_time = hour + ':' + min + ':' + sec;
    document.querySelector('.sunrise').innerHTML = sunrise_time;
    var sunset = new Date(data.sys.sunset * 1000);
        var hour = sunset.getHours();
        var min = sunset.getMinutes();
        var sec = sunset.getSeconds();
            var sunset_time = hour + ':' + min + ':' + sec;
    document.querySelector('.sunset').innerHTML = sunset_time;
})

