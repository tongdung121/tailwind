import $ from 'jquery';
window.$ = window.jQuery = $;
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


// Khởi tạo fullPage khi DOM ready
$(document).ready(function () {
    const fullPage1 = $('#fullpage');
    const fullPage2 = $('#fullpage2');

    if (fullPage1.length) {
        new fullpage('#fullpage', {
            licenseKey: 'gplv3-license', // 🔑 thêm dòng này
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

    if (fullPage2.length) {
        new fullpage('#fullpage2', {
            licenseKey: 'gplv3-license', // 🔑 thêm dòng này
            css3: true,
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
            lazyLoading: true,
            paddingTop: '0',
            paddingBottom: '0',
            responsiveWidth: '0',
            responsiveHeight: '0',
            responsiveSlides: false,
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            afterRender: function () {
                setTimeout(() => {
                    resizeSections();
                }, 1000);
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
            },
        });
    }

    function resizeSections() {
        const headerHeight = document.querySelector('#header').offsetHeight;
        const vh = window.innerHeight;
        const newHeight = vh - headerHeight;

        document.querySelectorAll('.section').forEach((section, index) => {
            section.style.setProperty('height', `calc(100vh - ${headerHeight}px)`, 'important');
            // Tìm phần tử con có class "image"
            const imageEls = section.querySelectorAll('.image');
            if (imageEls.length) {
                const ratio = 1152 / newHeight;
                imageEls.forEach(imageEl => {
                    imageEl.style.setProperty('aspect-ratio', ratio, 'important');
                });
            }
        });
    }

});
