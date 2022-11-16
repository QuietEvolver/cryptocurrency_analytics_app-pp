export default class ApiService {
  static getApiService(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.simpleswap.io/get_currency?api_key=${process.env.API_KEY}&symbol=btcs`;
      request.addEventListener("loadend", function() {
        // const response = JSON.parse(this.responseText);
        let response;
        if (this.status === 200) {
          response = JSON.parse(this.responseText);
          console.log("Response OK: ", response);
          resolve([response]);//, symbol
        } else {
          console.log("Response err: ", response);
          response = this.responseText;
          reject([this, response]); 
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}