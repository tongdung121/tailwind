import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Khởi tạo fullPage khi DOM ready
document.addEventListener("DOMContentLoaded", () => {
    const fullPage = document.getElementById('fullpage');
    const fullPage2 = document.getElementById('fullpage2');

    if (fullPage) {
        new fullpage('#fullpage', {
            // licenseKey: 'gplv3-license', // 🔑 thêm dòng này
            autoScrolling: true,
            fitToSection: true,
            scrollBar: false, // ẩn thanh scrollbar
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            // anchors: ['section1', 'section2', 'section3'],
            scrollingSpeed: 700,
            credits: { enabled: false },
            fixedElements: '#header',
            sectionSelector: '.section',
            slideSelector: '.slide',
            lazyLoading: true,
            afterRender: function () {
                const swiperThumbs = new Swiper(".mySwiperThumbs", {
                    spaceBetween: 10,
                    slidesPerView: 4,   // 👉 số ảnh nhỏ tối đa hiển thị
                    freeMode: true,
                    watchSlidesProgress: true,
                });
                new Swiper(".mySwiperFull", {
                    loop: true,
                    speed: 1500,
                    //effect: 'fade', // 👈 mờ mượt thay vì lướt cứng
                    fadeEffect: {
                        crossFade: true, // 👈 chuyển mượt giữa ảnh cũ và mới
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    thumbs: {
                        swiper: swiperThumbs,
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
            fitToSectionDelay: 1000,
            scrollBar: false, // ẩn thanh scrollbar
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            offsetSections: false,
            // anchors: ['section1', 'section2', 'section3'],
            scrollingSpeed: 700,
            credits: { enabled: false },
            fixedElements: '#header',
            sectionSelector: '.section',
            slideSelector: '.slide',
            lazyLoading: true,
            afterRender: function () {
                resizeSections();
                new Swiper(".mySwiperFull", {
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
                });
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
        });
    }
});
