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
   });
   
   
   //Recuperation de Id 
   
   
   
   const sourceId=window.location.search.split("?").join("");
   console.log('sourceId: '+sourceId);
   

   let dataLycee = [];
let dataColleges = [];
let dataPrimaire = [];
let data=[]

let entete=document.querySelector('.hero>h1')

window.addEventListener("load", getDataCycle);

async function getDataCycle() {
  const response = await fetch('../JSON/ecoles.json');
  const ecoles = await response.json();

  // Extraire les données de chaque cycle d'études
  dataLycee = extractEcoles(ecoles[0].Lycée);
  dataColleges = extractEcoles(ecoles[1].colleges);
  dataPrimaire = extractEcoles(ecoles[2].primaire);


recupereData(dataPrimaire)
recupereData(dataColleges)
recupereData(dataLycee)
}

function extractEcoles(items) {
  return items.map(item => item.infos.ecole);
}


function recupereData(tabs){
   tabs.forEach(element => {
      element.forEach(tt=>{
         data.push(tt)
      })   
   });  
   displayDetails(data)  
}

// fonction qui verifie id et affiche les infos
function displayDetails(tab){
   data.forEach(el=>{
      if(el.id==sourceId){

         //Ajoute les elements de ta page ici !!!
          entete.textContent=`${el.nom}`
         // console.log('element',el)
      }
      
   })
}
 
})

