import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Swiper ngoài (fullpage dọc)
const outerSwiper = new Swiper(".mySwiperOuter", {
    direction: "vertical",
    mousewheel: true,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperThumbs3 = new Swiper(".mySwiperThumbs3", {
    spaceBetween: 10,
    slidesPerView: 4,   // 👉 số ảnh nhỏ tối đa hiển thị
    freeMode: true,
    watchSlidesProgress: true,
});

const swiperFull3 = new Swiper(".mySwiperFull3", {
    loop: true,
    speed: 1500,
    // effect: 'fade', // 👈 mờ mượt thay vì lướt cứng
    fadeEffect: {
        crossFade: true, // 👈 chuyển mượt giữa ảnh cũ và mới
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    thumbs: {
        swiper: swiperThumbs3,
    },
});

const textBox = document.querySelector(".text-scrollable");

textBox.addEventListener("mouseenter", () => {
    outerSwiper.mousewheel.disable();
});
textBox.addEventListener("mouseleave", () => {
    outerSwiper.mousewheel.enable();
});
