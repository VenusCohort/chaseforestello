(function () {
    "use strict";
    // Back to top bottom that only shows once scrolling has begun with fixed position
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".back-to-top")

    const scrollContainer = () => {
        return document.documentElement || document.body;
    };

    document.addEventListener("scroll", () => {
        if (scrollContainer().scrollTop > showOnPx) {
            backToTopButton.classList.remove("hidden")
        } else {
            backToTopButton.classList.add("hidden")
        }
    })
    const goToTop = () => {
        document.body.scrollIntoView();
    };
    backToTopButton.addEventListener("click", goToTop)

    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function (e) {
            if (navLinks[i].classList.contains('active')) {
                navLinks[i].classList.toggle('active')
            }
                navLinks[i].classList.toggle('active');
        })
    }
})()