const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

const mainSlides = document.querySelector('.main-slide');
const slidesCount = mainSlides.querySelectorAll('div').length;



sideBar.style.top = `-${ (slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click' , () => {
    changeSlide('up');
    

});

downBtn.addEventListener('click' , () => {
    changeSlide('down');

});

document.addEventListener('keydown', event => {
    console.log(event.key);
    if (event.key === 'ArrowDown') {
        
        changeSlide('down');
        

    } else if (event.key === 'ArrowUp') {
        changeSlide('up');
        
    }

});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if( activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }


    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;

        }
    } 

    const height = container.clientHeight;


    mainSlides.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    
}
