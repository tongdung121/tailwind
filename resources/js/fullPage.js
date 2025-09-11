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
        const headerHeight = document.querySelector('#header').offsetHeight;
        new fullpage('#fullpage2', {
            licenseKey: 'gplv3-license', // 🔑 thêm dòng này
            css3: false,
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
                setTimeout(() => {
                    $("#loading").css("display", "none");
                    const swiperThumbs = new Swiper(".mySwiperThumbs", {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 2,
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
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        thumbs: {
                            swiper: swiperThumbs,
                        },
                        // on: {
                        //     slideNextTransitionStart() {
                        //         swiperThumbs.slideNext(); // thumbs cũng chạy tới
                        //     },
                        //     slidePrevTransitionStart() {
                        //         swiperThumbs.slidePrev(); // thumbs cũng lùi lại
                        //     }
                        // }
                    });
                }, 3500);
                window.addEventListener('resize', () => {
                    $("#loading").css("display", "none");
                });
            },
            afterResize: function () {
            },
            credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },

            // Events
            beforeLeave: function (origin, destination, direction, trigger) { },
            onLeave: function (origin, destination, direction, trigger) {
                if (direction === 'down') {
                    $('.content').css('margin-top', '0');
                } else {
                    $('.content').css('margin-top', `${headerHeight}px`);
                }
            },
            afterLoad: function (origin, destination, direction, trigger) {
            },
            afterResize: function (width, height) { },
            afterReBuild: function () { },
            afterResponsive: function (isResponsive) { },
            afterSlideLoad: function (section, origin, destination, direction, trigger) { },
            onSlideLeave: function (section, origin, destination, direction, trigger) { },
            onScrollOverflow: function (section, slide, position, direction) { }
        });

        function resizeSections() {
            const vh = window.innerHeight;
            const newHeight = vh - headerHeight;

            document.querySelectorAll('.section').forEach((section, index) => {
                section.style.setProperty('height', `calc(100vh - ${headerHeight}px)`, 'important');
                // Tìm phần tử con có class "image"
                const imageEls = section.querySelectorAll('.image');
                if (imageEls.length) {
                    const rightColWidth = section.querySelector('.right-col').offsetWidth;
                    const ratio = rightColWidth / newHeight;
                    imageEls.forEach(imageEl => {
                        imageEl.style.setProperty('aspect-ratio', ratio, 'important');
                    });
                }
            });
        }
    }
});
