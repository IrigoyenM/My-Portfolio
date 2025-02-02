// Hamburger Button
const Open = document.getElementById("open");
const Close = document.getElementById("close");
const Menu = document.getElementById("navBar");

Open.addEventListener("click", () => {
    Menu.classList.add("display");
    Close.classList.add("visible");
    Open.classList.add("invisible");
});

Close.addEventListener("click", () => {
    Menu.classList.remove("display");
    Close.classList.remove("visible");
    Open.classList.remove("invisible");

});