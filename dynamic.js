const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");
const testButton = document.getElementById("testContentBtn");
const loginButton = document.getElementById("loginContentBtn");
const resetButton = document.getElementById("resetContentBtn");
const logoutButton = document.getElementById("logoutContentBtn");

const elementsContainer = document.getElementById("elementsContainer");
const createElementBtn = document.getElementById("createElementBtn");
const deleteFirstElementBtn = document.getElementById("deleteFirstElementBtn");
const removeElementBtn = document.getElementById("removeElementBtn");

updateContentButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p>KRANTHI</p>";
});

testButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p>TEST BUTTON CLICKED</p>";
});
loginButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p>LOGIN BUTTON CLICKED</p>";
});
resetButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p>RESET BUTTON CLICKED</p>";
});
logoutButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p>LOGOUT BUTTON CLICKED</p>";
});
createElementBtn.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `Dynamically created element`;
  elementsContainer.appendChild(newParagraph);
});
  deleteFirstElementBtn.addEventListener('click', () => {
        if (elementsContainer.children.length > 0) {
            elementsContainer.removeChild(elementsContainer.children[0]);
        }
    });
removeElementBtn.addEventListener('click', () => {   
   if (elementsContainer.children.length > 0) { 
       elementsContainer.removeChild(elementsContainer.lastElementChild);
    }});
