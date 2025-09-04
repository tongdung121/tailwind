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

// tính chiều rồng cho phần hiển thị w-calcul
// lấy chiều cao của cửa sổ trình duyệt

const windowHeight = window.innerHeight;
// số để nhân không thay đổi
const factor = 1.2;
// tính chiều rộng với chiều cao màn hình.
const calculatedWidth = windowHeight * factor;
// áp dụng chiều rộng tính được cho các phần tử có class .w-calcul
const elements = document.querySelectorAll('.w-calcul');
elements.forEach(element => {
    element.style.width = `${calculatedWidth}px`;
});



