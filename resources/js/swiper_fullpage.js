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

setTimeout(() => {
    $("#loading").css("display", "none");
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
}, 3500);

// outerSwiper phải được khởi tạo trước
// ví dụ: const outerSwiper = new Swiper(".mySwiperOuter", { direction: 'vertical', mousewheel: true, ... });

document.querySelectorAll('.text-scrollable').forEach(el => {
    // đảm bảo CSS: .text-scrollable { overflow-y: auto; max-height: 100vh; }
    el.addEventListener('wheel', function (e) {
        // chỉ xử lý trước khi có scroll dọc
        if (el.scrollHeight <= el.clientHeight) {
            // không có overflow -> cho phép outer swiper xử lý
            return;
        }

        const delta = e.deltaY;
        const atTop = el.scrollTop === 0;
        const atBottom = (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 1);

        // nếu đang cuộn lên và vẫn chưa tới trên cùng => consume event (text scroll)
        if (delta < 0 && !atTop) {
            e.stopPropagation();    // ngăn outerSwiper nhận event
            return;
        }

        // nếu đang cuộn xuống và vẫn chưa tới đáy => consume event (text scroll)
        if (delta > 0 && !atBottom) {
            e.stopPropagation();
            return;
        }

        // nếu ở edge (top/bottom) => để event lan ra, outerSwiper sẽ nhận và chuyển section
        // (không cần e.preventDefault, cho outerSwiper thực hiện)
    }, { passive: false });
})

const header = document.getElementById("header");
const mySwiperOuter = document.querySelector('.mySwiperOuter');

const vh = window.innerHeight;
if (header) {
    const headerHeight = header.offsetHeight;
    if (mySwiperOuter) {
        mySwiperOuter.style.setProperty('height', `calc(100vh - ${headerHeight}px)`, 'important');
        const newHeight = vh - headerHeight;
        const imageEls = mySwiperOuter.querySelectorAll('.image');
        if (imageEls.length) {
            const rightColWidth = mySwiperOuter.querySelector('.right-col').offsetWidth;
            const ratio = rightColWidth / newHeight;
            imageEls.forEach(imageEl => {
                imageEl.style.setProperty('aspect-ratio', ratio, 'important');
            });
        }
    }
} else {
    if (mySwiperOuter) {
        const imageEls = mySwiperOuter.querySelectorAll('.image');
        if (imageEls.length) {
            const rightColWidth = mySwiperOuter.querySelector('.right-col').offsetWidth;
            const ratio = rightColWidth / vh;
            imageEls.forEach(imageEl => {
                imageEl.style.setProperty('aspect-ratio', ratio, 'important');
            });
        }
    }
}
