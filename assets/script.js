
let nameInputEl = document.querySelectorAll(".form-input");
// let user = nameInputEl;

let formSubmit = function (event) {
    event.preventDefault();

    let user = nameInputEl.value.trim

    let getUserSearch = function (nameInputEl) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+nameInputEl.value+"&appid=84e804a2f27fd4b395f985c7c7fd8ead";

        fetch(url)
        .then(function (response) {
          if (response.status != 200) {
              alert("no city")
          }
          return response.json();
    })
        .then(function(data) {
            console.log(data);

        }
        )

  
}









// let userFormEl = document.querySelector('#user-form');
// let cityButtonsEl = document.querySelector('.city-buttons');
// let nameInputEl = document.querySelectorAll('.form-input');
// let resultsContainerEl = document.querySelector('.results-container');
// let weatherResultsEl = document.querySelector('#weather-results');