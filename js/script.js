function fadeIn(el) {
    var opacity = 0.01;

    el.style.display = "block";

    var timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }

        el.style.opacity = opacity;

        opacity += opacity * 0.1;
    }, 10);
}

function fadeOut(el) {
    var opacity = 1;

    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = "none";
        }

        el.style.opacity = opacity;

        opacity -= opacity * 0.1;
    }, 10);
}

let buttons = document.querySelectorAll(".true-beauty .buttons button");
let borderButtons = document.querySelectorAll(
    ".true-beauty .buttons > div > div"
);
let photos = document.querySelectorAll(".true-beauty .photos");

for (let index = 0; index < buttons.length; index++) {
    buttons[index].onmousemove = () => {
        borderButtons[index].style.display = "none";
    };
    buttons[index].onmouseout = () => {
            borderButtons[index].style.display = "block";
    };

    buttons[index].onclick = () => {
        // $(".true-beauty .photos:nth-child(1)").fadeIn();
        photos.forEach((element) => {
            element.style.display = "none";
        });
        fadeIn(photos[index]);

        // document.querySelectorAll(".true-beauty .photos1").fadeIn();
    };
}
