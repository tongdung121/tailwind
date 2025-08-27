import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Khởi tạo Swiper
document.addEventListener("DOMContentLoaded", () => {
    console.log('---1-----');
    new Swiper(".mySwiper", {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

