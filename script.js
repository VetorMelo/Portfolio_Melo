function toggleParagraph(id) {
    var para = document.getElementById(id);
    if (para.style.display === "none" || para.style.display === "") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;

    let scrollToTop = document.getElementById("scrollToTop");
    if (scrollTop > 200) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

function toggleMenu() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Começo carrossel

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function showItem(index) {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    showItem(index);
});

nextButton.addEventListener('click', () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    showItem(index);
});


// Fim carrossel