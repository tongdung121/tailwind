import './bootstrap';

const urlPathname = window.location.pathname;
const number = urlPathname.substring(urlPathname.length - 1); // lấy ký tự cuối cùng của đường dẫn

if (number && !isNaN(number)) {
    if (number === '1' || number === '2') {
        import('./fullPage.js').then(() => {
            console.log("FullPage.js loaded!");
        });
        import('./swiper_custom.js').then(() => {
            console.log("Swiper swiper_custom.js loaded!");
        });
    } else if (number === '3' || number === '4') {
        import('./swiper_fullpage.js').then(() => {
            console.log("Swiper swiper_fullpage.js loaded!");
        });
    } else if (number === '5') {
        import('./swiper_fullpage1.js').then(() => {
            console.log("Swiper swiper_fullpage1.js loaded!");
        });
    }
} else {
    console.log("No matching number found.");
}

import './custom';

