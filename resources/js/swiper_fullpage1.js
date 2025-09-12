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

setTimeout(() => {
    let loading = document.getElementById('loading');
    loading.style.display = 'none';
}, 3500);

document.querySelectorAll(".text-scrollable").forEach((box) => {
    // Desktop
    box.addEventListener("mouseenter", () => {
        if (box.scrollHeight > box.clientHeight) {
            outerSwiper.mousewheel.disable();
        }
    });
    box.addEventListener("mouseleave", () => {
        outerSwiper.mousewheel.enable();
    });

    // Mobile
    box.addEventListener("touchstart", () => {
        if (box.scrollHeight > box.clientHeight) {
            outerSwiper.allowTouchMove = false;
        }
    });

    box.addEventListener("touchmove", () => {
        const atTop = box.scrollTop === 0;
        const atBottom = Math.ceil(box.scrollTop + box.clientHeight) >= box.scrollHeight;

        // Nếu còn cuộn được bên trong → khóa outerSwiper
        if (!atTop && !atBottom) {
            outerSwiper.allowTouchMove = false;
        } else {
            // Nếu cuộn tới đầu hoặc cuối → bật outerSwiper
            outerSwiper.allowTouchMove = true;
        }
    });
});

const header = document.getElementById("header");
const screenWidth = window.innerWidth;
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
        let imageHeight = 0;
        const imageEls = mySwiperOuter1.querySelectorAll('.image');
        if (imageEls.length) {
            if (screenWidth > 768) {
                const rightColWidth = mySwiperOuter1.querySelector('.right-col').offsetWidth;
                const ratio = rightColWidth / newHeight;
                imageEls.forEach(imageEl => {
                    imageEl.style.setProperty('aspect-ratio', ratio, 'important');
                });
            } else {
                const ratio = 440 / (newHeight * 0.71);
                console.log('ratio', ratio);
                imageEls.forEach(imageEl => {
                    imageEl.style.setProperty('aspect-ratio', ratio, 'important');
                });
                const imageEl = mySwiperOuter1.querySelector('.image-mobile');
                if (imageEl) {
                    imageHeight = imageEl.offsetHeight;
                }
            }
        }
        const textScrollables = mySwiperOuter1.querySelectorAll('.text-scrollable');
        if (textScrollables.length) {
            let maxHeight = 0;
            if (screenWidth <= 768) {
                setTimeout(() => {
                    maxHeight = newHeight - imageHeight - 103; // padding
                    textScrollables.forEach(textScrollable => {
                        textScrollable.style.maxHeight = `${maxHeight}px`;
                    });
                }, 1500);
            } else {
                maxHeight = newHeight - 140; // padding
                textScrollables.forEach(textScrollable => {
                    textScrollable.style.maxHeight = `${maxHeight}px`;
                });
            }
        }
    }

}
