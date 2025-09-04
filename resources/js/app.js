import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';


// Khởi tạo fullPage khi DOM ready
document.addEventListener("DOMContentLoaded", () => {
    const fullPage = document.getElementById('fullpage');
    const fullPage2 = document.getElementById('fullpage2');

    if (fullPage) {
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
            afterRender: function () {
                new Swiper(".mySwiperFull", {
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
                });
            },
        });
    }

    if (fullPage2) {
        new fullpage('#fullpage2', {
            licenseKey: 'gplv3-license', // 🔑 thêm dòng này
            autoScrolling: true,
            fitToSection: true,
            scrollBar: false, // ẩn thanh scrollbar
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            anchors: ['section1', 'section2', 'section3'],
            scrollingSpeed: 700,
            fixedElements: '#header',
            afterRender: function () {
                new Swiper(".mySwiperFull", {
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
                });
                resizeSections();
            },
            afterResize: function () {
                resizeSections();
            },
        });
    }
    function resizeSections() {
        const headerHeight = document.querySelector('#header').offsetHeight;
        const vh = window.innerHeight;
        const newHeight = vh - headerHeight;

        document.querySelectorAll('.section').forEach(section => {
            section.style.height = newHeight + 'px';

            // fullpage.js dùng .fp-tableCell bên trong section
            const tableCell = section.querySelector('.fp-tableCell');
            if (tableCell) {
                tableCell.style.height = newHeight + 'px';
            }
        });
    }
});

// Khởi tạo Swiper
document.addEventListener("DOMContentLoaded", () => {
    const swiperThumbs = new Swiper(".mySwiperThumbs", {
        spaceBetween: 10,
        slidesPerView: 4,   // 👉 số ảnh nhỏ tối đa hiển thị
        freeMode: true,
        watchSlidesProgress: true,
    });

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
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        thumbs: {
            swiper: swiperThumbs,
        },
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



