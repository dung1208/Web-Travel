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

/* button booking*/
document.getElementById('btn-booking-index-head').onclick = () => {
    location.href = "booking.html";
};

document.getElementById('btn-booking-index-end').onclick = () => {
    location.href = "booking.html";
};
/* button blog */
document.getElementById('btn-view-blog-post-page6').onclick = () => {
    location.href = "blog.html"
}