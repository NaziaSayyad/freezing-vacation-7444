let slideContainer=document.querySelector(".container");
let slide=document.querySelector(".slides");
let slides=document.querySelectorAll(".slide");
let delay=5000;
let index=1;
let firstClone=slides[0].cloneNode(true)
let lastClone=slides[slides.length-1].cloneNode(true)
let last1clone=slides[slides.length-2].cloneNode(true)
let last2clone=slides[slides.length-3].cloneNode(true)

firstClone.id="first-clone"
lastClone.id="last-clone"
last1clone.id="sec-last"
last2clone.id="ok"
slide.append(firstClone)
slide.prepend(lastClone)
slide.append(last1clone)
slide.append(last2clone)
let SlideWidth=slides[index].clientWidth
console.log(SlideWidth)
// slide.style.transform=`translate(${-SlideWidth*index}px)`
console.log(  slide.style.transform)
let startslide=()=>{
setInterval(()=>{
index++
slide.style.transform=`translateX(${-SlideWidth * index}px)`
slide.style.transition=`.7s`
},delay)
}
startslide()
slide.addEventListener("transitionend",()=>{
    slides=document.querySelectorAll(".slide");
    if(slides[index].id==firstClone.id){
        slide.style.transition=`none`
        index=1
        slide.style.transform=`translateX(${-SlideWidth * index}px)`
    }
    
})
// 
// 


// upper part 



// 
// 

   let popularitems= [
    {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg",
        "title": "printed tshirts",
        "id": 1
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg",
        "title": "Plain T-Shirts",
        "id": 2
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg",
        "title": "Oversizes T-Shirts",
        "id": 3
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg",
        "title": "Kurtas",
        "id": 4
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
        "title": "Vests",
        "id": 5
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
        "title": "shorts",
        "id": 6
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg",
        "title": "shirts",
        "id": 7
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg",
        "title": "Joggers",
        "id": 8
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shoes-1657526331.jpg",
        "title": "Cadual Shoes",
        "id": 9
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
        "title": "Boxers",
        "id": 10
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg",
        "title": "Mobile Covers",
        "id": 11
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg",
        "title": "Backpacks",
        "id": 12
      }
    ]
    function append(){
        popularitems.forEach(function(ele){
            let div=document.createElement("div")
             document.querySelector("#popular").append(div)
             let img=document.createElement("img")
             img.src=ele.image
             
             div.append(img)
        })
    }
    append()

    let items= [
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-B2599-Men-1658240220.jpg",
        "id": 1
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sweatshirts---Hoodies-Men-1657788986.jpg",
        "title": "",
        "id": 2
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/mid-banner-clearance---Copy-1658322427.jpg",
        "title": "",
        "id": 3
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/meshirt-men-1656488700.jpg",
        "title": "",
        "id": 4
      }
    ]
 function append1(){
        items.forEach(function(ele){
            let div=document.createElement("div")
             document.querySelector("#discount").append(div)
             let img=document.createElement("img")
             img.src=ele.image
             
             div.append(img)
        })
    }
    append1()
    // sellers sliding part
   // sellers sliding part
      // sellers sliding part
         // sellers sliding part




            // sellers sliding part



               // sellers sliding part



                  // sellers sliding part



                     // sellers sliding part
    let slideContainer1=document.querySelector(".container1");
let slide1=document.querySelector(".slides1");
let slides1=document.querySelectorAll(".slide1");
let delay1=5000;
let index1=1;
let firstClone1=slides1[0].cloneNode(true)
let lastClone1=slides1[slides1.length-1].cloneNode(true)
let last1clone1=slides1[slides1.length-2].cloneNode(true)
let last2clone1=slides1[slides1.length-3].cloneNode(true)

firstClone1.id="first-clone1"
lastClone1.id="last-clone1"
last1clone1.id="sec-last1"
last2clone1.id="ok1"
slide1.append(firstClone1)
slide1.prepend(lastClone1)
slide1.append(last1clone1)
slide1.append(last2clone1)
let SlideWidth1=slides1[index1].clientWidth
console.log(SlideWidth1)

console.log(  slide1.style.transform)
let startslide1=()=>{
setInterval(()=>{
index1++
slide1.style.transform=`translateX(${-SlideWidth1 * index1}px)`
slide1.style.transition=`.7s`
},delay1)
}
startslide1()
slide1.addEventListener("transitionend",()=>{
    slides1=document.querySelectorAll(".slide1");
    if(slides1[index1].id==firstClone1.id){
        slide1.style.transition=`none`
        index1=1
        slide1.style.transform=`translateX(${-SlideWidth1 * index1}px)`
    }
    
})
let items1= [
    
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-tees---Copy-1658123486.jpg",
    "title": "",
    "id": 2
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-bboxers2-1658294222.jpg",
    "title": "",
    "id": 3
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-shirts-1658123485.jpg",
    "title": "",
    "id": 4
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-sliders-1658123485.jpg",
    "title": "",
    "id": 5
  }
]
function append2(){
  items1.forEach(function(ele){
      let div=document.createElement("div")
       document.querySelector("#bargincounter").append(div)
       let img=document.createElement("img")
       img.src=ele.image
       
       div.append(img)
  })
}
append2()

// clearance part here
// 
// 
// clearance part here
// 
//
// clearance part here
// 
//
// clearance part here
// 
//
// clearance part here
// 
//
// clearance part here
// 
//
let items2=[
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-1657003958.jpg",
    "title": "",
    "id": 1
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-jackets-men-1657872392.jpg",
    "title": "",
    "id": 2
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/unnamed-1657696177.jpg",
    "title": "",
    "id": 3
  },
  {
    "image": "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Full-Sleeves-Men-1658308584.jpg",
    "title": "",
    "id": 4
  }
]
function append3(){
  items2.forEach(function(ele){
      let div=document.createElement("div")
       document.querySelector("#stupidcollection").append(div)
       let img=document.createElement("img")
       img.src=ele.image
       
       div.append(img)
  })
}
append3()

let slideContainer3=document.querySelector(".container3")
let prebtn=document.querySelector("#pre")
let nextbtn=document.querySelector("#next")
let slide2=document.querySelector(".slides2");
let slides2=document.querySelectorAll(".slide2");
let delay2=5000;
let index2=1;
let firstClone2=slides2[0].cloneNode(true)
let lastClone2=slides2[slides2.length-1].cloneNode(true)
let last1clone2=slides2[slides2.length-2].cloneNode(true)
let last2clone2=slides2[slides2.length-3].cloneNode(true)

firstClone2.id="first-clone1"
lastClone2.id="last-clone1"

slide2.append(firstClone2)
slide2.prepend(lastClone2)

let SlideWidth2=slides2[index2].clientWidth
console.log(SlideWidth2)

console.log(  slide2.style.transform)

 
nextbtn.addEventListener("click",movetoright)
function movetoright(){
  index2++
  slide2.style.transform=`translateX(${-SlideWidth2 * index2}px)`
  slide2.style.transition=`.7s`
  
}