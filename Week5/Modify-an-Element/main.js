var yourName = document.getElementById("yourName");
var yourCollege = document.getElementById("yourCollege");
var yourLocation = document.getElementById("yourLocation");

let myform = document.getElementById("myform");

myform.addEventListener("submit", function() {
    alert(` 
    Your Name: ${yourName.value}
    College: ${yourCollege.value}
    Location: ${yourLocation.value} `);
});