const wrappers = document.querySelector(".carouselWrappers");
const navButtons = document.querySelectorAll(".navButton");


const products = [
    {
        id: 1,
        title: "Limpiador",
        img: "../imgs/limpiador.png",
    },

    {
        id: 2,
        title: "Hidratante",
        img: "../imgs/hidratante.png",
    },

    {
        id: 3,
        title: "Exfoliante",
        img: "../imgs/exfoliante.png",
    },
];


let choosenProduct = products[0]
const currentProductImage = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productsTitle");



navButtons.forEach((item,index) => {
    item.addEventListener("click", () => {
        // Change the current slider
        wrappers.style.transform = `translateX(${-100 * index}vw)` ;

        // Change the choseen product
        choosenProduct = products[index]
    
        // Change the title product
        currentProductTitle.textContent = choosenProduct.title
        currentProductImage.src = choosenProduct.img

    });
});

const openB = document.querySelector(".buttonClients");
const close = document.querySelector(".close");
const payment = document.querySelector(".payment")

openB.addEventListener("click",() => {
    payment.style.display = "flex";
});

close.addEventListener("click",() => {
    payment.style.display = "none";
});