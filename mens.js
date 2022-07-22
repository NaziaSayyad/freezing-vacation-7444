let slider=tns({
  container:".my-slider",
  "slideBy":"1",
  "speed":800,
  "nav":false,
  autoplay:true,
  controls:false,
  autoplayButtonOutput:false,
 
  
  responsive:{
1400:{
items:3,
gutter:20,
},
1024:{
items:3,
gutter:20
},768:{
items:3,
gutter:20
}
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
let slider7=tns({
  container:".my-slider7",
  "slideBy":7,
  "speed":800,
"nav":false,
 
controlsContainer:"#controls",
prevButton:"#previous",
nextButton:"#next",
responsive:{
1400:{
items:7,
gutter:20,
},
1024:{
items:7,
gutter:20
},768:{
items:6,
gutter:20
},480:{
items:6,
gutter:20
}
  }
})

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
let slider1=tns({
  container:".my-slider1",
  "slideBy":"1",
  "speed":800,
  "nav":false,
  autoplay:true,
  controls:false,
  autoplayButtonOutput:false,
 
  
  responsive:{
1400:{
items:3,
gutter:20,
},
1024:{
items:3,
gutter:20
},768:{
items:2,
gutter:20
},480:{
  items:2,
  gutter:20
}
  }
})