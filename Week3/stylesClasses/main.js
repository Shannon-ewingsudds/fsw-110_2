//1. Create a new folder with an html, css, and js file (Hint: Make sure the html file is linked to the css and js file) See .html file.

//2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). 
//Give them whatever text you would like.
for (var i = 0; i < 5; i++) {
    const h2 = document.createElement("h2");
    h2.textContent = "Changing styles and classes using JS";
    document.body.appendChild(h2);
}
//3. Using the .style property, edit the element’s styles in your js to have: Font-size: 20px Font-weight: 
//lighter Font-family: sans-serif Color: cornflowerblue.
const h2Style = document.querySelectorAll("h2");

for (let i = 0; i < h2Style.length; i++) {
    h2Style[i].style.fontSize = "20px";
    h2Style[i].style.fontWeight = "lighter";
    h2Style[i].style.fontFamily = "sans-serif";
    h2Style[i].style.color = "cornflowerblue";
}

//4. Go to your CSS file and create a class called .border that has: 2px solid black border, 5px padding 5px margin. See .css file.

//5. Back in your JS, add that class to the elements being created using classList.
for (let i = 0; i < h2Style.length; i++) {
    h2Style[i].classList.add("border");
}