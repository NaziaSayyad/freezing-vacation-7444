// alert("hii")
let slideContainer = document.querySelector(".container");
let slide = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");

let delay = 5000;
let index = 1;

let firstClone = slides[0].cloneNode(true)
let lastClone = slides[slides.length - 1].cloneNode(true)
let last1clone = slides[slides.length - 2].cloneNode(true)
let last2clone = slides[slides.length - 3].cloneNode(true)

firstClone.id = "first-clone"
lastClone.id = "last-clone"
last1clone.id = "sec-last"
last2clone.id = "ok"


slide.append(firstClone)
slide.prepend(lastClone)
slide.append(last1clone)
slide.append(last2clone)


let SlideWidth = slides[index].clientWidth
console.log(SlideWidth)
// slide.style.transform=`translate(${-SlideWidth*index}px)`
console.log(slide.style.transform)
let startslide = () => {
    setInterval(() => {
        index++
        slide.style.transform = `translateX(${-SlideWidth * index}px)`
        slide.style.transition = `.7s`
    }, delay)
}
startslide()
slide.addEventListener("transitionend", () => {
    slides = document.querySelectorAll(".slide");
    if (slides[index].id == firstClone.id) {
        slide.style.transition = `none`
        index = 1
        slide.style.transform = `translateX(${-SlideWidth * index}px)`
    }
    if (slides[index].id == laststClone.id) {
        slide.style.transition = `none`
        index = slides.length - 2
        slide.style.transform = `translateX(${-SlideWidth * index}px)`
    }
})


// -----------------------         bestSeller slider       -----------------//

var sliderMain=document.getElementById("bestsellersWomen");
    var item=sliderMain.getElementsByClassName("slider-prod");
    function next()
    {
        sliderMain.append(item[0]);
    }
    function prev()
    {
        sliderMain.prepend(item[item.length-1])
    }