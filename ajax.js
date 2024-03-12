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