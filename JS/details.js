 
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

//Recuperation de Id 
   
   
   
   const sourceId=window.location.search.split("?").join("");
   console.log('sourceId: '+sourceId);
   

   let dataLycee = [];
let dataColleges = [];
let dataPrimaire = [];
let data=[]

let entete=document.querySelector('.home-section>h1')
let date1=document.querySelector('.dt-create1');
let date2=document.querySelector('.dt-create2');
let cardImage1=document.querySelector('.creation-img');
let cardImage2=document.querySelector('.local-img');
let cardImage3=document.querySelector('.result-img');
let cardImage4=document.querySelector('.tranch-img');

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
          cardImage1.innerHTML=`<img src="${el.picture.image1}" width="100%" height="100%" alt="">`
          cardImage2.innerHTML=`<img src="${el.picture.image2}" width="100%" height="100%" alt="">`
          cardImage3.innerHTML=`<img src="${el.picture.image3}" width="100%" height="100%" alt="">`
          cardImage4.innerHTML=`<img src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjb2xhcml0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="">`
          date1.textContent=`${el.Date_ecole.Date_creation}`
          date2.textContent=`${el.Date_ecole.Date_ouverture}`
          console.log('test-details',el)
          if(el.id.split("")[0] === "L") {
            gestion1(el);
          } else if(el.id.split("")[0] === "P") {
            gestion3(el);
          } else if(el.id.split("")[0] === "C") {
            gestion2(el);
          } else {
            console.log("Le premier mot ne correspond à aucun cas");
          }
          
         
      
        
      }
      
   })
}
 


