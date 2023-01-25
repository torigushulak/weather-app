const form = document.getElementById("location");
const inputBox = document.getElementById("inputbox");

function exactLocationWeather(apiKey) {

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        let cityName = inputBox.value;
        console.log(`City Input Value ${cityName}`);
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        console.log('URL', url);
    
        fetch(url)
        .then(function(response) {return response.json() })
        .then(function(data) { 
            console.log(data);
            getWeather(data);
         })
        .catch(function(){

        });
    });
}

window.onload = function() {
    exactLocationWeather( "703c74046fe8b55cf0020cef8b8558ef" );
  }

const getWeather = (d) => {
    const celcius = Math.round(parseFloat(d.main.temp)-273.15);
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('description').innerHTML = d.weather[0].main;    
    document.getElementById("temp").innerHTML = celcius + '&deg;' ;
}