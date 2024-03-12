//simpleajax script
//Provides basic functionality to use Ajax to send a request to a php script

//create an instance of the XHR object
let getDataAjax = () => {
url = "displayDataAjax.php";
ajaxRequest(url,"GET","",displayData);

}
//call back function which will display the returned data
let displayData = (response) => {

    theDivElement = document.getElementById("data");
    theDivElement.innerHTML = response;
}
let getActiveStatus = () => {
    // var active = document.getElementById("idnum").value;
    url = "update.php";
    ajaxRequest(url,"GET","",displayActiveData);

}

let displayActiveData = (response) => {

    theDivElement = document.getElementById("activeInfo");
    theDivElement.innerHTML = response;

}

let displayError = () => {
    console.error("An error occured when fetching the data");

}

let ajaxRequest = (url,method,data,callback) => {

    request = new XMLHttpRequest();
    request.onload = function(){
        response = request.responseText;
        callback(response);
    }
    request.onerror = displayError;
    request.open(method, url);
    if(method == "POST"){
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    request.send(data);

}

//makes a request to the api for the weather
// getWeatherList = () =>{

//     fetch("GET https://api.thenewsapi.com/v1/news/top?api_token=yJvISyDAXuLVmccVJhTV8FXBB5Ed7eQL3mgoPnos&locale=us&limit=3")
//       .then(response => response.json())
//       .then(addtoList)
//       .then(getCatList);
// }

var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: 'yJvISyDAXuLVmccVJhTV8FXBB5Ed7eQL3mgoPnos',
    categories: document.getElementById("activeInfo"),
    local: document.getElementById("location"),
    title: //get this from the api samehow
    url: //get this from the api samehow
    limit: '3'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');

    fetch("GET https://api.thenewsapi.com/v1/news/top?api_token=yJvISyDAXuLVmccVJhTV8FXBB5Ed7eQL3mgoPnos&locale=" + local +"&limit=" + limit)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//populates the dropdown select item with the list of locations
addtoList = (response) =>{
    
    //get the list of property names from the json object
    let lecaltionList = Object.keys(response.message);
    
  
    //create a select option for each item in the breedlist array
    const select = document.getElementById("loaction");
    breedlist.forEach(b =>{
        const optionElem = document.createElement("option");
        optionElem.value = b;
        optionElem.text = b;
        select.appendChild(optionElem);
    });
}

//event handler for the dropdown list which triggers request to api for selected location
handleChange = (e) =>{
    let loc = e.target.value;

    let url = "https://dog.ceo/api/breed/" + loc + "/images/random"
    fetch(url)
    .then(response=> response.json())
        .then(showDog);

}


//catagories going to have to get the value from the drop down list selected
//local will need to get the value of local radio button checked all should try and be pulled from the dom