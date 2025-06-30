

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var tl = gsap.timeline()

function openanime(){
  tl
.to(".loader",{
  height:0,
  duration:2,
  delay:2.7,
  ease:Expo.easeInOut
})
.to(".elem2",{
  height:"100%",
  duration:2,
  delay:-2.2,
  ease:Expo.easeInOut
})
.to(".elem3",{
  height:"100%",
  duration:2,
  delay:-2,
  ease: Expo.easeInOut
})
}
openanime()



function revealtoSpan(){
  document.querySelectorAll(".reveal")
.forEach(function(elem){
  var parent =document.createElement("span")
  var child =document.createElement("span")

  parent.classList.add("parent")
  child.classList.add("child")

  child.innerHTML=elem.innerHTML
  parent.appendChild(child)

  elem.innerHTML=""
  elem.appendChild(parent)

})
}
revealtoSpan()



var t2 = gsap.timeline()

function spananime(){
  t2.from(".child span",{
    x: "100%",
    opacity:0,
    duration:1,
    delay:1,
    stagger:.2,
    ease: Power3.easeInOut 
  })
  t2.to(".parent .child",{
    y:"-100%",
    duration:1,
    // delay:1,
    ease: Circ.easeInOut
  })
  
}
spananime()
gsap.from(".topheading h5",{
  x: "100%",
  opacity:0,
  duration:1,
  // delay:1,
  // stagger:.2,
  ease: Power3.easeInOut 
})