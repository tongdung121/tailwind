import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Outer Swiper (vertical fullpage)
const outerSwiper = new Swiper(".mySwiperOuter1", {
    direction: "vertical",
    speed: 800,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Inner thumbs + full gallery
const swiperThumbs = new Swiper(".mySwiperThumbs1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
new Swiper(".mySwiperFull1", {
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbs,
    },
});

// Handle scrollable text
document.querySelectorAll(".text-scrollable").forEach((box) => {
    box.addEventListener("mouseenter", () => {
        if (box.scrollHeight > box.clientHeight) {
            outerSwiper.mousewheel.disable();
        }
    });
    box.addEventListener("mouseleave", () => {
        outerSwiper.mousewheel.enable();
    });
});

const header = document.getElementById("header");
if (header) {
    const headerHeight = header.offsetHeight;
    const mySwiperOuter1 = document.querySelector('.mySwiperOuter1')
    if (mySwiperOuter1) {
        const vh = window.innerHeight;
        const newHeight = vh - headerHeight;
        const colLeft = mySwiperOuter1.querySelector('.left-col');
        if (colLeft) {
            colLeft.style.height = `calc(100vh - ${headerHeight}px)`;
        }
        const textScrollables = mySwiperOuter1.querySelectorAll('.text-scrollable');
        if (textScrollables.length) {
            let maxHeight = newHeight - 140; // padding
            textScrollables.forEach(textScrollable => {
                textScrollable.style.maxHeight = `${maxHeight}px`;
            });
        }
        const imageEls = mySwiperOuter1.querySelectorAll('.image');
        if (imageEls.length) {
            const rightColWidth = mySwiperOuter1.querySelector('.right-col').offsetWidth;
            const ratio = rightColWidth / newHeight;
            imageEls.forEach(imageEl => {
                imageEl.style.setProperty('aspect-ratio', ratio, 'important');
            });
        }
    }

}
