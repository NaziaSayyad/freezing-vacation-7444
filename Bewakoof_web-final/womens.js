// alert("hii")
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
  
  // -----------------------         bestSeller slider       -----------------//
  
  var productContainer=document.querySelectorAll('.product-container');
  var nxtBtn=document.querySelectorAll( '.next-btnn');
  var preBtn=document.querySelectorAll( '.pre-btnn');
  
  
  productContainer.forEach((item,i)=>{
    var contDimensions=item.getBoundingClientRect();
    var contwidth=contDimensions.width;
    nxtBtn[i].addEventListener("click",()=>{
        item.scrollLeft +=contwidth;
        
    })
    preBtn[i].addEventListener('click',()=>{
       item.scrollLeft -=contwidth;
    })
    
  })
  
  
  // -----------------------         bestSeller slider       -----------------//
  
  
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