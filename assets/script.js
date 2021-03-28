const KEY = "&appid=84e804a2f27fd4b395f985c7c7fd8ead";
const URL = "https://api.openweathermap.org/data/2.5/weather?q="
const nameInputEl = document.getElementById("form-input");
const submitButton = document.getElementById("btn-submit");
const history = document.querySelector(".city-buttons");
historyCountSpan = document.querySelector("#history-count")

// let cityLocalStorageObject = {}; 
let citiesArray = [];


// console.log(submitButton);
// console.log(nameInputEl);
// console.log(localStorage);


const addCity = (ev) => {
  ev.preventDefault();

  let cityLocalStorageObject = {
    city: nameInputEl.value,

  // if (cityLocalStorageObject === "") {
  //   return;
  }
  

  citiesArray.push(cityLocalStorageObject);
  document.querySelector("form").reset();
  console.log(citiesArray);

  // console.log("city", JSON.stringify(cityLocalStorageObject));

  localStorage.setItem("cityList", JSON.stringify(citiesArray));
  // if (city !== )
  // localStorage.setItem('city', JSON.stringify(city))
}
submitButton.addEventListener("click", addCity);








// function renderCitiesList() {
//   history.innerHTML = "";
//   historyCountSpan.textContent = city.length;

//   for (let i = 0; i < city.length; i++) {
//     city = city[i];

//     let li = document.createElement("li");
//     li.textContent = city;
//     li.setAttribute("data-index", i);

//     let button = document.createElement("button");
//     button.textContent = "";

//     li.appendChild(button);
//     history.appendChild(li);
//   }

// }






// const updater = JSON.parse(localStorage.getItem('city'));

// console.log(updater)

// fetch(URL + updater + KEY)
// .then(function (response) {
//   return response.json()
// })
// .then(function (res) {
//   console.log(res)
// })





// let city = nameInputEl.value.trim();

// let getUserSearch = function (city) {
//     let url = "https://api.openweathermap.org/data/2.5/weather?q=" + nameInputEl + "&appid=84e804a2f27fd4b395f985c7c7fd8ead";
    
    
//      fetch(url)
//         .then(function (response) {
//           if (response.ok) {
//             console.log(response);
//             response.json().then(function (data) {
//               console.log(data);
//               displaySearchResults(data, user);
//             });
//           } else {
//             alert('Error: ' + response.statusText);
//           }
//         })
//         .catch(function (error) {
//           alert('Unable to connect');
//         });


// let formSubmitHandler = function (event) {
//   event.preventDefault();

//   let cityName = nameInputEl.value.trim();

//   if (cityName) {
//     getUserSearch(cityName);
//     resultsContainerEl.textContent = '';
//     nameInputEl.value = '';
//   } else {
//     alert('Please enter a city');
//   }
// };

// let buttonClickHandler = function (event) {
//   let city = event.target.getAttribute('data-city');

//   if (city) {
//     getFeaturedCities(city);

//     resultsContainerEl.textContent = '';
//   }
// };



//     function getFeaturedCities(city) {
//         var apiUrl = '' + city + '';

//         fetch(apiUrl).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                 displaySearchResults(data.items, city);
//                 });
//             } else {
//                 alert('Error: ' + response.statusText);
//         }
//         });
//     }

// var displaySearchResults = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('a');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';
//     repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//    }
//  };

// userFormEl.addEventListener('submit', formSubmitHandler);
// cityButtonsEl.addEventListener('click', buttonClickHandler);
// }