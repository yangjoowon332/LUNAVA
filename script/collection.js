const slider = document.querySelector('.best_products_grid');
const prevBtn = document.querySelector('.slider_prev');
const nextBtn = document.querySelector('.slider_next');
const productCard = document.querySelector('.best_product_item');


nextBtn.addEventListener('click', () => {

    // grid의 gap 값 가져오기
    const gap = parseFloat(
        getComputedStyle(slider).gap
    );

    // 상품 한 개의 너비 + gap
    const moveWidth = productCard.offsetWidth + gap;

    // 오른쪽으로 이동
    slider.scrollBy({
        left: moveWidth,
        behavior: 'smooth'
    });

});


prevBtn.addEventListener('click', () => {

    const gap = parseFloat(
        getComputedStyle(slider).gap
    );

    const moveWidth = productCard.offsetWidth + gap;

    // 왼쪽으로 이동
    slider.scrollBy({
        left: -moveWidth,
        behavior: 'smooth'
    });

});