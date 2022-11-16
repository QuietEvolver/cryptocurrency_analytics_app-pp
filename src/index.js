// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

// Business Logic

function getWeather() {//symbol
  let request = new XMLHttpRequest();
  const url = `https://api.simpleswap.io/get_currency?api_key=15635da6-8163-42f5-8f20-77ba0f5b5fc6&symbol=btc`;// `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      console.log("Response OK: ", response);
      printElements(response);//, symbol
    } else {
      console.log("Response err: ", response);
      printError(this, response);//, symbol
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic

function printElements(apiResponse) { //, symbol
  document.querySelector('#showResponse').innerText = `${apiResponse.name}`; //}; ${symbol`;
}

function printError(request, apiResponse) { //symbol 
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for : ${request.status} ${request.statusText}: ${apiResponse.message}`;//${symbol}
}

function handleFormSubmission(event) {
  event.preventDefault();
  //const symbol = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});