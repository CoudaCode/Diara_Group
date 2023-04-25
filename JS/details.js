 
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
 


let eleCycle=document.querySelector('.Cycle');
let resExam=document.querySelector('.result-info');
let droitExamDiv=document.querySelector('.tranch-info');
let elemBloc=document.querySelector('.local-info')
function gestion1(base){
 
let cycleseconde=`

         <div class="PremierCycle"> 
               <div class="PremierTitle">
                  <h1>Premier Cycle</h1>
                  <h1>Nombre</h1>
               </div>
               <div class="sixTitle">
                  <p>${base.structure_ecole[0].niveau}</p>
                  <p class="six">${base.structure_ecole[0].nombres}</p>
               </div>
               <div class="cinqTitle">
                  <p>${base.structure_ecole[1].niveau}</p>
                  <p class="cinq">${base.structure_ecole[1].nombres}</p>
               </div>
               <div class="quatreTitle">
                  <p>${base.structure_ecole[2].niveau}</p>
                  <p class="quatre">${base.structure_ecole[2].nombres}</p>
               </div>
               <div class="troisTitle">
                  <p>${base.structure_ecole[3].niveau}</p>
                  <p class="trois">${base.structure_ecole[3].nombres}</p>
               </div>
         </div>
            
            
      <div class="PremierCycle">
               <div class="PremierTitle">
                  <h1>Second Cycle</h1>
                  <h1>Nombre</h1>
               </div>
               <div class="sixTitle">
                  <p>${base.structure_ecole[4].niveau} / ${base.structure_ecole[5].niveau}</p>
                  <p class="six">
                        <span class="sdcA">${base.structure_ecole[4].nombres}</span> /  <span class="sdcC">${base.structure_ecole[4].nombres}</span> 
                  </p>
               </div>
               <div class="cinqTitle">
                     <p>${base.structure_ecole[6].niveau} / ${base.structure_ecole[7].niveau } / ${base.structure_ecole[8].niveau }</p>
                     <p class="six">
                           <span class="sdcA">${base.structure_ecole[6].nombres}</span> /  
                           <span class="sdcC">${base.structure_ecole[7].nombres} </span> /
                           <span class="sdcA">${base.structure_ecole[8].nombres}</span> 
                     </p>
               </div>
               <div class="quatreTitle">
                     <p>${base.structure_ecole[9].niveau}/${base.structure_ecole[10].niveau}/${base.structure_ecole[11].niveau}</p>
                     <p class="six">
                           <span class="TleA">${base.structure_ecole[9].nombres}</span> /  <span class="TleC">${base.structure_ecole[10].nombres}</span>/
                           <span class="TleC">${base.structure_ecole[11].nombres}</span>
                     </p>
               </div>
      </div> 

`

let resTle=`
<div class="bac">
       <h3>BAC</h3>
      <div class="bacyear1">
         <p>20/21 :</p>
         <p>${base.bac.ann_scolaire1}</p>
      </div>
      <div class="bacyear2">
         <p>20/22 :</p>
         <p>${base.bac.ann_scolaire2}</p>
      </div>
</div>
`
let infosAdresse=`
                             <div class="commune">
                                 <p>Commune</p>
                                 <p class="com">${base.lieu}</p>
                              </div>
                              <div class="commune">
                                 <p>Situation GeoGraphique</p>
                                 <p class="GeoGraphique">${base.lieu} Abidjan</p>
                              </div>
                              <div class="commune">
                                 <p>Adresse Postale :</p>
                                 <p class="situation"> 08 BP 40 ABIDJAN 08</p>
                              </div>
                              <div class="commune">
                                 <p>Adresse Mail</p>
                                 <p class="mail">${base.email}</p>
                              </div>
                              <div class="commune">
                                 <p>Telepone</p>
                                 <p class="tel">${base.telephone[0]} /${base.telephone[1]}</p>
                              </div>
                              <div class="commune">
                                 <p>Regime</p>
                                 <p class="regime">${base.Regime}</p>
                              </div>
                              <div class="commune">
                                 <p>Categorie</p>
                                 <p class="Categorie">Mixte</p>
                              </div>
`

let tarifTle=`
<div class="first">
   <h3>2nd Cycle</h3>
   <div class="firstCyc">
      <div class="elemOne">
         <p>
            <span class="mtn1">${base.tranche_scolarité.scolarité_min}</span>Fcfa à <span class="mtn2">${base.tranche_scolarité.scolarité_max}</span>Fcfa
         </p>
         <p>
            <span class="mtn1">Droit D'examen Tle</span>: <span class="mtn2">${base.tranche_scolarité.Droit_Tle}</span>Fcfa
         </p>
      </div>
                                 
   </div>
`


eleCycle.innerHTML=cycleseconde
resExam.innerHTML=resTle
droitExamDiv.innerHTML=tarifTle
elemBloc.innerHTML=infosAdresse
}


function gestion2(base){
  
   let cyclefirst=`
   <div class="PremierCycle"> 
      <div class="PremierTitle">
         <h1>Premier Cycle</h1>
         <h1>Nombre</h1>
      </div>
      <div class="sixTitle">
         <p>${base.structure_ecole[0].niveau}</p>
         <p class="six">${base.structure_ecole[0].nombres}</p>
      </div>
      <div class="cinqTitle">
         <p>${base.structure_ecole[1].niveau}</p>
         <p class="cinq">${base.structure_ecole[1].nombres}</p>
      </div>
      <div class="quatreTitle">
         <p>${base.structure_ecole[2].niveau}</p>
         <p class="quatre">${base.structure_ecole[2].nombres}</p>
      </div>
      <div class="troisTitle">
         <p>${base.structure_ecole[3].niveau}</p>
         <p class="trois">${base.structure_ecole[3].nombres}</p>
      </div>
   </div>
  `
   
   let resthree=`
   <div class="bac">
          <h3>BEPC</h3>
         <div class="bacyear1">
            <p>20/21 :</p>
            <p>${base.bepc.ann_scolaire1}</p>
         </div>
         <div class="bacyear2">
            <p>20/22 :</p>
            <p>${base.bepc.ann_scolaire2}</p>
         </div>
   </div>
   `
   let infosAdresse=`
                                <div class="commune">
                                    <p>Commune</p>
                                    <p class="com">${base.lieu}</p>
                                 </div>
                                 <div class="commune">
                                    <p>Situation GeoGraphique</p>
                                    <p class="GeoGraphique">${base.lieu} Abidjan</p>
                                 </div>
                                 <div class="commune">
                                    <p>Adresse Postale :</p>
                                    <p class="situation"> 08 BP 40 ABIDJAN 08</p>
                                 </div>
                                 <div class="commune">
                                    <p>Adresse Mail</p>
                                    <p class="mail">${base.email}</p>
                                 </div>
                                 <div class="commune">
                                    <p>Telepone</p>
                                    <p class="tel">${base.telephone[0]} /${base.telephone[1]}</p>
                                 </div>
                                 <div class="commune">
                                    <p>Regime</p>
                                    <p class="regime">${base.Regime}</p>
                                 </div>
                                 <div class="commune">
                                    <p>Categorie</p>
                                    <p class="Categorie">Mixte</p>
                                 </div>
   `
   
   let tarifThree=`
   <div class="first">
      <h3>2nd Cycle</h3>
      <div class="firstCyc">
         <div class="elemOne">
            <p>
               <span class="mtn1">${base.tranche_scolarité.scolarité_min}</span>Fcfa à <span class="mtn2">${base.tranche_scolarité.scolarité_max}</span>Fcfa
            </p>
            <p>
               <span class="mtn1">Droit D'examen 3ième</span>: <span class="mtn2">${base.tranche_scolarité.Droit_Tle}</span>Fcfa
            </p>
         </div>
                                    
      </div>
   `
   
   
   
   
   
   eleCycle.innerHTML=cyclefirst
   resExam.innerHTML=resthree
   droitExamDiv.innerHTML=tarifThree
   elemBloc.innerHTML=infosAdresse
   }
   

   
   function gestion3(base){

      let cycleCm=`
            <div class="PremierCycle"> 
               <div class="PremierTitle">
                  <h1>Primaire</h1>
                  <h1>Nombre</h1>
               </div>
               <div class="sixTitle">
                  <p>${base.structure_ecole[0].niveau}</p>
                  <p class="six">${base.structure_ecole[0].nombres}</p>
               </div>
               <div class="cinqTitle">
                  <p>${base.structure_ecole[1].niveau}</p>
                  <p class="cinq">${base.structure_ecole[1].nombres}</p>
               </div>
               <div class="quatreTitle">
                  <p>${base.structure_ecole[2].niveau}</p>
                  <p class="quatre">${base.structure_ecole[2].nombres}</p>
               </div>
               <div class="troisTitle">
                  <p>${base.structure_ecole[3].niveau}</p>
                  <p class="trois">${base.structure_ecole[3].nombres}</p>
               </div>
               <div class="troisTitle">
                  <p>${base.structure_ecole[4].niveau}</p>
                  <p class="trois">${base.structure_ecole[4].nombres}</p>
               </div>
               <div class="troisTitle">
                  <p>${base.structure_ecole[5].niveau}</p>
                  <p class="trois">${base.structure_ecole[5].nombres}</p>
               </div>
            </div>
      `
      
      let resCm2=`
      <div class="bac">
             <h3>CM2</h3>
            <div class="bacyear1">
               <p>20/21 :</p>
               <p>${base.cm2.ann_scolaire1}</p>
            </div>
            <div class="bacyear2">
               <p>20/22 :</p>
               <p>${base.cm2.ann_scolaire2}</p>
            </div>
      </div>
      `
      let infosAdresse=`
                                   <div class="commune">
                                       <p>Commune</p>
                                       <p class="com">${base.lieu}</p>
                                    </div>
                                    <div class="commune">
                                       <p>Situation GeoGraphique</p>
                                       <p class="GeoGraphique">${base.lieu} Abidjan</p>
                                    </div>
                                    <div class="commune">
                                       <p>Adresse Postale :</p>
                                       <p class="situation"> 08 BP 40 ABIDJAN 08</p>
                                    </div>
                                    <div class="commune">
                                       <p>Adresse Mail</p>
                                       <p class="mail">${base.email}</p>
                                    </div>
                                    <div class="commune">
                                       <p>Telepone</p>
                                       <p class="tel">${base.telephone[0]} /${base.telephone[1]}</p>
                                    </div>
                                    <div class="commune">
                                       <p>Regime</p>
                                       <p class="regime">${base.Regime}</p>
                                    </div>
                                    <div class="commune">
                                       <p>Categorie</p>
                                       <p class="Categorie">Mixte</p>
                                    </div>
      `
      
      let tarifCm2=`
      <div class="first">
         <h3>2nd Cycle</h3>
         <div class="firstCyc">
            <div class="elemOne">
               <p>
                  <span class="mtn1">${base.tranche_scolarité.scolarité_min}</span>Fcfa à <span class="mtn2">${base.tranche_scolarité.scolarité_max}</span>Fcfa
               </p>
               <p>
                  <span class="mtn1">Droit D'examen Tle</span>: <span class="mtn2">${base.tranche_scolarité.Droit_Tle}</span>Fcfa
               </p>
            </div>
                                       
         </div>
      `
      
      
      
      
      
      eleCycle.innerHTML=cycleCm
      resExam.innerHTML=resCm2
      droitExamDiv.innerHTML=tarifCm2
      elemBloc.innerHTML=infosAdresse
      }