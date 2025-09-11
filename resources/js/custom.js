

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

// lắng nghe sự kiện thay đổi kích thước cửa sổ để cập nhật lại chiều rộng
const imageW = document.querySelector('.image');
// console.log(imageW);

setTimeout(() => {
    let loading = document.getElementById('loading');
    loading.style.display = 'none';
}, 3500);
