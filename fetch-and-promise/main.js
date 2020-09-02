/** Sample to showcase fetch API, XMLHttpRequet and promise */

const choice = document.querySelector("select");
const para = document.querySelector("p");
para.style.fontSize = "25px";
let URL = "";
choice.onchange = function() {

    if (choice.value == "GMT Time Zone") {

        URL = "http://time.jsontest.com/";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.responseType = 'json';
        xhr.onload = function() {
            para.textContent = JSON.stringify(xhr.response);
        }
        xhr.send();
    } else
    if (choice.value == "My IP address") {

        URL = "http://ip.jsontest.com/";
        fetch(URL).then(function(response) {
            return response.json();
        }).then(function(text) {
            para.textContent = JSON.stringify(text);
        }).catch(function(e) {
            console.log("Exception:: " + e);
        })

    } else {
        //do nothing
        para.textContent = "Choose an other options from the dropdown";
    }
};