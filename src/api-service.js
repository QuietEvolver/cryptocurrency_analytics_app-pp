export default class ApiService {
  static getApiService(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.simpleswap.io/get_currency?api_key=${process.env.API_KEY}&symbol=btc`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          console.log("Response OK: ", response);
          resolve(response);//, symbol
        } else {
          console.log("Response err: ", response);
          reject(this, response);//, symbol
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}