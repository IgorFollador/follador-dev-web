window.addEventListener("DOMContentLoaded", function () {
    var fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(function (element) {
        element.style.opacity = 0;
        setTimeout(function () {
            element.style.opacity = 1;
        }, 500);
    });
});