// key = f8b22bc62cd40e6b1d109dc1be06f097

// http://api.weatherstack.com/current? access_key = f8b22bc62cd40e6b1d109dc1be06f097& query = New York


const cityInput = document.getElementById("city-input");

const cityWrapper = document.getElementById("city-wrapper");
const weatherImg = document.getElementById("img-wrapper");
const weatherTemp = document.getElementById("temp");
// const weatherInfo = document.getElementsByClassName("weather-info");
const weatherWind = document.getElementById("wind");
const weatherPrecip = document.getElementById("precip");
const weatherPressure = document.getElementById("pressure");

function sendReq() {
  const city = cityInput.value;

  const promise = fetch(
      `https://api.weatherstack.com/current?access_key=f8b22bc62cd40e6b1d109dc1be06f097&query=${city}`
      
      
  );
  
  
 

  promise
    .then((res) => res.json())
    .then((data) => {
      // show this data on front end

      // data = {
      //   request: {},
      //   location: {},
      //   current: {}
      // };

      const resultCity = data.request.query;
      const resultTemp = data.current.temperature;
      const weatherImgUrl = data.current.weather_icons[0];
      const weatherDesc = data.current.weather_descriptions[0];
      const resultPressure = data.current.pressure;
      const resultPrec = data.current.precip;

      // update everything on front-end
      cityWrapper.innerText = resultCity;
       weatherImg.setAttribute("src", weatherImgUrl);
      //weatherImg.setAttribute("src", weatherImgUrl);
      weatherTemp.innerText = resultTemp;
      weatherWind.innerText = weatherDesc;
      weatherPrecip.innerText = resultPrec;
      weatherPressure.innerText = resultPressure;

      




      console.log(data);
    })
    .catch((err) => console.log(err));
}