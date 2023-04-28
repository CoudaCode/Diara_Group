$(".contener1").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

window.addEventListener('DOMContentLoaded', ()=>{
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;
  
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);
  
  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }
  
  navMenu.addEventListener("click", (event) =>{
     if(event.target.hasAttribute("data-toggle") && 
     window.innerWidth <= mediaSize){
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
           collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
             collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
     }
  });
  function collapseSubMenu(){
    navMenu.querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active")
    .classList.remove("active");
  }
  function resizeFix(){
     // if navMenu is open ,close it
     if(navMenu.classList.contains("open")){
       toggleNav();
     }
     // if menuItemHasChildren is expanded , collapse it
     if(navMenu.querySelector(".menu-item-has-children.active")){
        collapseSubMenu();
     }
  }
  
  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
       resizeFix();
     }
  })})

// anime au scroll

// let anime=document.querySelectorAll('.contener')


// let options = {
  
//   rootMargin: "-10% 0px",
//   threshold: 0,
// };
// function animation(entries){
// console.log(entries);
// entries.forEach((e)=>{
//    if(e.isIntersecting
//       ){
//  e.target.style.opacity=1;
//  e.target.style.transition='all 6s'

//    }
// })
// }
// let observer = new IntersectionObserver(animation, options);

// anime.forEach((element)=>{
//     observer.observe(element)

// })