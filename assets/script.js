const KEY = "&appid=84e804a2f27fd4b395f985c7c7fd8ead";
const URL = "https://api.openweathermap.org/data/2.5/weather?q="
const URLtwo = "https://api.openweathermap.org/data/2.5/uvi?lat="
const URLthree = "&lon=";
const URLfour = "https://api.openweathermap.org/data/2.5/onecall?lat="; //"https://api.openweathermap.org/data/2.5/forecast?q="
const nameInputEl = document.getElementById("form-input");
const submitButton = document.getElementById("btn-submit");

const history = document.querySelector(".city-buttons");
historyCountSpan = document.querySelector("#history-count")

let cityLocalStorageObject = {}; 
let citiesArray = [];
var longitude;
var latitude;



const addCity = (ev) => {
  ev.preventDefault();

    cityLocalStorageObject = {
    city: nameInputEl.value,
    }

      if (cityLocalStorageObject.city === "") { /* added .city */
      return;
      }
        //citiesArray has new object KEY:VALUE added to end of array
        citiesArray.push(cityLocalStorageObject);
        document.querySelector('form').reset();
        console.log(citiesArray);

      localStorage.setItem('cityList', JSON.stringify(citiesArray));
  
        let cityName = cityLocalStorageObject.city;
        console.log(cityName);
        searchWeather(cityName);
}
//function searchWeather fetches main City API
function searchWeather(searchValue) {
        fetch(URL + searchValue + KEY)
        .then(function (response) {
        return response.json()
        })
        .then(function (data) {
        console.log(data)
        //drawWeather writes out the response
        drawWeather(data);
        forecastData(data);
        })
        .catch(function() {
        //catch errors
        });
  renderCitiesList();
}

function renderCitiesList() {
  history.innerHTML = "History Results";
  historyCountSpan.textContent = citiesArray.length;

    for (let i = 0; i < citiesArray.length; i++) {
      city = citiesArray[i];

      let button = document.createElement("button");
      button.textContent = citiesArray[i].city;
      button.setAttribute("id", "btn-submit");
      button.setAttribute("data-index", i);
      button.addEventListener('click', function(event) {
        event.preventDefault();
        searchWeather(event.target.textContent);
      })
    // li.appendChild(button);
    history.appendChild(button);
  }
}

function drawWeather(d) {
  // document.getElementById('date').innerHTML = (moment().format("LLLL"));
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
  document.getElementById('location').innerHTML = d.name;
  let today = $('<p>')
    // .addClass('column')
    .attr('id', 'today')
    .text(moment().add(0, 'days').calendar("LL"));
    $('#location').append(today)
  
  document.getElementById('icon-image').setAttribute("src", "http://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png"),  

	document.getElementById('description').innerHTML = d.weather[0].description;
  
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    
  document.getElementById('humidity').innerHTML = d.main.humidity;
  document.getElementById('wind-speed').innerHTML = d.wind.speed;

    longitude = document.getElementById('lon').innerHTML = d.coord.lon;
    latitude = document.getElementById('lat').innerHTML = d.coord.lat;

    fetch(URLtwo + latitude + URLthree + longitude + KEY)
      .then(function (response) {
      return response.json()
      })
      .then(function (dataTwo) {
      console.log(dataTwo)
      uvIndex(dataTwo);
      forecastData();
      })
      .catch(function() {
      });
}

function uvIndex(dataTwo) {
  document.getElementById('uv-index').innerHTML = dataTwo.value;
  document.getElementById('uv-index').removeAttribute('style');
}


function forecastData(f) {
  longitude = f.coord.lon;
  latitude = f.coord.lat;

  fetch(URLfour + latitude + URLthree + longitude + '&exclude={current, minutely,hourly,alerts}' + KEY)  //fetch(URLfour + searchValue + KEY)
  .then(function (response) {
  if (!response.ok) {
  throw Error("ERROR");
  }
  return response.json()
  })
  .then(dataThree => {
  console.log(dataThree.daily); //[0].weather[0]
  
  const forecastList = dataThree.daily
  var dayBox = '';
  
  for(var i = 0; i < 5; i++) {
    console.log(`${forecastList[i].temp}`)
    // forecastList.forEach(function(daily, i) {
    // $(`#day-${i}`).val(daily.weather[i])
    // console.log(forecastList);
    // const weatherList
    //  })
    var fahrenheit2 = Math.round(((parseFloat(`${forecastList[i].temp.day}`)-273.15)*1.8)+32);
    console.log(fahrenheit2);
    // weatherList.forEach(function(daily, i) {
    dayBox = $('<div>')
    .addClass('column card')
    .attr('id', `day-${i}`)
    // .text(`${forecastList[i].weather[0].main}`)
    let dateBox = $('<p>')
    .addClass('column temp-size')
    .attr('id', `date-${i}`)
    .text(moment().add(`${i}`, 'days').calendar("LL"));
    let iconP = $('<p>')

    let iconBox = $('<img>')
    
    .attr('id', `icon-${i}`)
    .attr("src", "http://openweathermap.org/img/wn/" + forecastList[i].weather[0].icon + "@2x.png")
    var tempBox = $('<p>')
    .addClass('column temp-size')
    .attr('id', `temp-${i}`)
    .text("Temperature: " + fahrenheit2)
    var windBox = $('<p>')
    .addClass('column wind-size')
    .attr('id', `wind-${i}`)
    .text(`Wind Speed: ${forecastList[i].wind_speed} mph`)
    // $('#forecast-header').prepend('#forecast')
    $('#forecast').append(dayBox)
    dayBox.append(dateBox);
    dateBox.append(tempBox);
    tempBox.append(iconP);
    iconP.append(iconBox);
    iconP.after(windBox);
    
    
    // $(`day-${i}`)
    // let tempBox = $('<p>')
        }
      
     }
    )
   }
   

//can i make forecastList = the object of datathree

//gets forecast with response from earlier
// function forecast(dataThree) { //only needs the object dataThree once. inside key array must be looped
// const forecastList = dataThree.daily;
// console.log(forecastList);
// };

// forecastList.forEach(function(daily, i) {

 
//   for(let i = 0; i < 5; i++) {
  
  // const forecastBox = dataThree.daily[i].map(d => {
  //   return `<div class="card">
  //   <p>${d.dt.val()}</p>
  //   <p>${d.temp.day.val()}</p>
  //   </div>
  //   `; 
  // })
  // .join('');
  // console.log(forecastBox);
  

  // document
  //   .querySelector('#forecast-header')
  //   .insertAdjacentElement('afterbegin', forecastBox);
  


// }
    
// }
   
// }


submitButton.addEventListener("click", addCity);
















//   fetch(URLfour + latitude + URLthree + longitude + '&exclude={current, minutely,hourly,alerts}' + KEY)  //fetch(URLfour + searchValue + KEY)
//   .then(function (response) {
//   if (!response.ok) {
//   throw Error("ERROR");
//   }
//   return response.json()
//   })
//   .then(function (dataThree) {
//   console.log(dataThree)
//   forecast(dataThree);
//   })
//   .catch(function() {
//   }); 


  // console.log(forecastBox);
//   )
//   document.getElementById('forecast-header').insertAdjacentHTML('afterend', '<div></div>');

  // for(let i = 0; i < 5; i++) {
  //   let forecastList = dataThree.daily[i];







 //   <h5 class="card-title">Card title</h5>
    //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   <a href="#" class="btn btn-primary">Go somewhere</a>)
    // </div>
    // </div>
    // `)