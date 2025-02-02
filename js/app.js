const arteMarcelo = document.getElementById("arteMar");
const skinCare = document.getElementById("skinCare");
const instagram = document.getElementById("instaButton");


// Funciones

arteMarcelo.addEventListener("click",() => {
    // window.location = "https://artemarcelo.com/";
    window.location.href = "https://artemarcelo.com/";
});

skinCare.addEventListener("click",() => {
    // window.location = "https://artemarcelo.com/";
    window.localStorage.href = "../pages/Skincare-Web.html";
});

instagram.addEventListener("click",() => {
    window.location.href = "https://www.instagram.com/michaig2.0/";
});