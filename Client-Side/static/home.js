/*
    Define an on click listener for the button.
*/
var clicked = function(){
    console.log(" Button clicked! Get random number");

    // Make request to the backend server.
    var serverRequest = new XMLHttpRequest();
    serverRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var serverResponse = JSON.parse(this.responseText);
            console.log("The random number is " + serverResponse.number);
        }
    };
    serverRequest.open('GET', "http://localhost:3000/random", true);
    serverRequest.send();
}

var getRandomNumber = document.getElementById("getRandomNumber");
getRandomNumber.addEventListener("click", () => clicked());