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
// popular items started
let popularitems= [
    {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg",
     
        "id": 1
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg",
      
        "id": 2
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg",
      
        "id": 3
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg",
      
        "id": 4
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg",
      
        "id": 5
      },
      {
        "image": "https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg",
   
        "id": 6
      }]
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
    let slider7=tns({
      container:".my-slider7",
      "slideBy":4,
      "speed":800,
    "nav":false,
     
    controlsContainer:"#controls",
    prevButton:"#previous",
    nextButton:"#next",
    responsive:{
    1400:{
    items:5,
    gutter:20,
    },
    1024:{
    items:5,
    gutter:20
    },768:{
    items:5,
    gutter:20
    },480:{
    items:5,
    gutter:20
    }
      }
    })
    let slider9=tns({
      container:".my-slider9",
      "slideBy":3,
      "speed":800,
    "nav":false,
     
    controlsContainer:"#controls1",
    prevButton:"#previous1",
    nextButton:"#next1",
    responsive:{
    1400:{
    items:5,
    gutter:20,
    },
    1024:{
    items:5,
    gutter:20
    },768:{
    items:5,
    gutter:20
    },480:{
    items:5,
    gutter:20
    }
      }
    })

    let slider11=tns({
      container:".my-slider11",
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