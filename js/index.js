var slides = document.getElementsByClassName('slide-page-1');
var index = 0;
const goLeft = () => {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    slides[0].style.marginLeft = "-" + 25 * index + "%";
}
const goRight = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    slides[0].style.marginLeft = "-" + 25 * index + "%";
}
setInterval(goRight, 5000);