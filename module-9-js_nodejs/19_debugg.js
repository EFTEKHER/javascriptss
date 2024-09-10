var axios= require('axios');
var url= "https://restcountries.com/v3.1/all";

axios.get(url).then(function(response) {
    let CountryList=response.data;
    let StatusCode=response.status;
    console.log(response.data);
}).catch(function(error){
    console.log(error);
});