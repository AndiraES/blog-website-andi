// SLIDER

let slider = document.getElementById("slider");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft += 1000;
})

backBtn.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft -= 1000;
})


// RESPONSIVE FOR PHONE

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar-menu");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}


