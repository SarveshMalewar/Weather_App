const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "55148d1500msh13f487e7ee78458p140e76jsn5826f7adceee",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// Delhi

const getWeatherD = (Delhi) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Dtemp.innerHTML = response.temp;
    Dfeels_like.innerHTML = response.feels_like;
    Dhumidity.innerHTML = response.humidity;
    Dmin_temp.innerHTML = response.min_temp;
    Dmax_temp.innerHTML = response.max_temp;
    Dwind_speed.innerHTML = response.wind_speed;
    Dwind_degrees.innerHTML = response.wind_degrees;
    Dsunrise.innerHTML = response.sunrise;
    Dsunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherD("Delhi");

// Mumbai

const getWeatherM = (Mumbai) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Mtemp.innerHTML = response.temp;
    Mfeels_like.innerHTML = response.feels_like;
    Mhumidity.innerHTML = response.humidity;
    Mmin_temp.innerHTML = response.min_temp;
    Mmax_temp.innerHTML = response.max_temp;
    Mwind_speed.innerHTML = response.wind_speed;
    Mwind_degrees.innerHTML = response.wind_degrees;
    Msunrise.innerHTML = response.sunrise;
    Msunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherM("Mumbai");

// Chennai

const getWeatherC = (Chennai) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Ctemp.innerHTML = response.temp;
    Cfeels_like.innerHTML = response.feels_like;
    Chumidity.innerHTML = response.humidity;
    Cmin_temp.innerHTML = response.min_temp;
    Cmax_temp.innerHTML = response.max_temp;
    Cwind_speed.innerHTML = response.wind_speed;
    Cwind_degrees.innerHTML = response.wind_degrees;
    Csunrise.innerHTML = response.sunrise;
    Csunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherC("Chennai");

// Kolkata

const getWeatherK = (Kolkata) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Ktemp.innerHTML = response.temp;
    Kfeels_like.innerHTML = response.feels_like;
    Khumidity.innerHTML = response.humidity;
    Kmin_temp.innerHTML = response.min_temp;
    Kmax_temp.innerHTML = response.max_temp;
    Kwind_speed.innerHTML = response.wind_speed;
    Kwind_degrees.innerHTML = response.wind_degrees;
    Ksunrise.innerHTML = response.sunrise;
    Ksunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherK("Kolkata");

// Bangalore

const getWeatherB = (Bangalore) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Btemp.innerHTML = response.temp;
    Bfeels_like.innerHTML = response.feels_like;
    Bhumidity.innerHTML = response.humidity;
    Bmin_temp.innerHTML = response.min_temp;
    Bmax_temp.innerHTML = response.max_temp;
    Bwind_speed.innerHTML = response.wind_speed;
    Bwind_degrees.innerHTML = response.wind_degrees;
    Bsunrise.innerHTML = response.sunrise;
    Bsunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherB("Bangalore");

// Pune

const getWeatherP = (Pune) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    Ptemp.innerHTML = response.temp;
    Pfeels_like.innerHTML = response.feels_like;
    Phumidity.innerHTML = response.humidity;
    Pmin_temp.innerHTML = response.min_temp;
    Pmax_temp.innerHTML = response.max_temp;
    Pwind_speed.innerHTML = response.wind_speed;
    Pwind_degrees.innerHTML = response.wind_degrees;
    Psunrise.innerHTML = response.sunrise;
    Psunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city

    })
    .catch((err) => console.error(err));
};

getWeatherP("Pune");

// Hard coded default city for home page

const getWeatherfor = (city) => {
  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
  .then((response) => response.json())
  .then((response) => {
    
    console.log(response);

    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
      
    cityName.innerHTML = city
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherfor(myCity.value);
});

getWeatherfor("Nagpur");


