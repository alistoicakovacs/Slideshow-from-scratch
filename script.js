const mainContainer = document.querySelector(".container");
const containerTop = document.querySelector(".container-top")
const containerBottom = document.querySelector(".container-bottom")
const imageTop = document.querySelector(".image-top")
const imageBottom = document.querySelector(".image-bottom")
const allImagesTop = document.querySelectorAll('.image-top')
const allImagesBottom = document.querySelectorAll('.image-bottom')
const imageContainerTop = document.querySelectorAll(".image-container-top")
const imageContainerBottom = document.querySelectorAll('.image-container-bottom')

// let currentSlide = 0;

// window.addEventListener('click',function() {
//     currentSlide++;
//     console.log(currentSlide)
//     imageContainerTop.forEach((slide,index)=> {
//         slide.style.transform = `translateX(${100* (index - currentSlide)}%)`;
//     })

//     if (currentSlide === maxSlide) {
//         currentSlide = 0;
//     } else {
//         currentSlide++
//     }

//     imageContainerTop.forEach((slide,index)=> {
//         slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
//     })
// })


// let maxSlide = imageContainerTop.length-1;



// const slideFunction = function() {
//     imageContainerTop.forEach((slide, index) => {
//     slide.style.transform = `translateX(${index * 100}%)`;
//     console.log(slide)
// })
//     imageContainerBottom.forEach((slide,index)=>{
//         slide.style.transform = `translateX(${index * 100}%)`;
//         console.log(slide)
//     })
// }




// window.onload = slideFunction();