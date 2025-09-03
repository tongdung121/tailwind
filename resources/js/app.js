import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

// Khởi tạo Swiper
document.addEventListener("DOMContentLoaded", () => {
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
    // Khởi tạo fullPage khi DOM ready
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license', // 🔑 thêm dòng này
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false, // ẩn thanh scrollbar
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        anchors: ['section1', 'section2', 'section3'],
        scrollingSpeed: 700,
    });
});



