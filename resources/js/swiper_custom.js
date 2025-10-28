import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwiper);
} else {
    initSwiper();
}
// Khởi tạo Swiper
function initSwiper() {
    const swiperThumbs = new Swiper(".mySwiperThumbs", {
        spaceBetween: 10,
        slidesPerView: 4,   // 👉 số ảnh nhỏ tối đa hiển thị
        freeMode: true,
        watchSlidesProgress: true,
    });

    new Swiper(".mySwiper", {
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
            swiper: swiperThumbs,
        },
    });
}
