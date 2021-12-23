var yourName = document.getElementById("yourName");
var college = document.getElementById("college");
var location = document.getElementById("location");


let form = document.getElementById("myForm");

form.addEventListener("submit", function() {
    alert(`Your Name: ${yourName.value} \nCollege: ${college.value} \nLocation: ${location.value}`);
    yourName.value = "";
    college.value = "";
    location.value = "";
});