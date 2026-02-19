
const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");
const  testButton = document.getElementById("testContentBtn");
const loginButton = document.getElementById("loginContentBtn");


updateContentButton.addEventListener("click",() => {  
    dynamicContentDiv.innerHTML = "<p>Kranthi</p>";
})
testButton.addEventListener("click", () => {
    dynamicContentDiv.innerHTML = "<p>TEST BUTTON CLICKED</p>";
})
loginButton.addEventListener("click",() => {
    dynamicContentDiv.innerHTML = "<p>LOGIN BUTTON CLICKED</p>";

})


