// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import ApiService from './api-service.js';

// Business Logic

function getApiService(){
  let promise = ApiService.getApiService();
  promise.then(function(apiData){
    printElements(apiData);
  }, function(error){
    printError(error);
  });
}

// UI Logic

function printElements(apiResponse) { //, symbol
  document.querySelector('#showResponse').innerText = `${apiResponse[0].name}`; //}; ${symbol`;
}

function printError(error) { //request, apiResponse, symbol 
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for : ${error[0].status} ${error[0].statusText}: ${error[1].message}`;//${symbol}
}

function handleFormSubmission(event) {
  event.preventDefault();
  // const name = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getApiService();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});