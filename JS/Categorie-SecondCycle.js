//animation texte//
const texteComplet = "OPTEZ POUR LES MEILLEURS ENSEIGNEMENTS ";
		let index = 0;

		function afficherLettre() {
			const texte = document.querySelector('.home-section>h1');
			texte.innerHTML += texteComplet.charAt(index);
			index++;

			if (index > texteComplet.length - 1) {
				clearInterval(intervalId);
			}
		}

		const intervalId = setInterval(afficherLettre, 100);
//mise en page avec le fichier json
let data=[]
let secondeData=[]
let dataFinal=[]
let blocs=document.querySelector('.school-content')
let btns=document.querySelectorAll('#pagination .blocks');
// search barre variables
let btnSearch=document.querySelector('.search-icon-wrapper')
let inputSearch=document.querySelector('.searchbar-input')

btnSearch.addEventListener('click',()=>{
    console.log('result',inputSearch.value)
    searchDisplay(dataFinal,inputSearch.value)
})
async function getDataPremierCycle(){
    let res= await fetch('../JSON/ecoles.json');
    res= await res.json();
    data=res[0].Lycée

    data.forEach(item=>{
        secondeData.push(item.infos.ecole)    
    })
    displaySchool(secondeData)
}

getDataPremierCycle()

function displaySchool(secondeData){
    
    secondeData.forEach((el)=>{
        el.forEach(t=>{
            dataFinal.push(t)   
        })
       
    })
    displayCard(dataFinal.slice(0,4))
   
}

btns[0].addEventListener('click',()=>{
    displayCard(dataFinal.slice(0,5))
})
btns[1].addEventListener('click',()=>{
    displayCard(dataFinal.slice(6,10))
})
btns[2].addEventListener('click',()=>{
    displayCard(dataFinal.slice(11,15))
})



function displayCard(source){
    let row="";
    source.forEach(item=>{
        row+=`
        <div class="row-card-school">
            <div class="col-school">
                <div class="col-image">
                    <img src="${item.picture.image1}" alt="">
                </div>
            </div>
            <div class="col-school">
                <h3>${item.nom}</h3>
                <p>Commune : <span>${item.lieu}</span></p>
                <p>Localisation : <span>${item.lieu}</span> , Abidjan</p>
            </div>
        </div>
        `
    })
    blocs.innerHTML=row 
    sendId(dataFinal)
}


function searchDisplay(data, text) {
    let row2 = "";
    blocs.innerHTML = "";
    for (let objet of data) {
      if (objet.lieu.includes(text)) {
        console.log(objet);
        row2 += `
          <div class="row-card-school">
              <div class="col-school">
                  <div class="col-image">
                      <img src="${objet.picture.image1}" alt="">
                  </div>
              </div>
              <div class="col-school">
                  <h3>${objet.nom}</h3>
                  <p>Commune : <span>${objet.lieu}</span></p>
                  <p>Localisation : <span>${objet.lieu}</span> , Abidjan</p>
              </div>
          </div>
          `;
      }
    }
    blocs.innerHTML = row2;
    sendId(dataFinal)
    
  }
  
   //Fonction qui renvoie id dans la barre de recherche au click de l'image
   function sendId(donnee){
    let imageCard=document.querySelectorAll('.col-image>img');
    imageCard.forEach((item,index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let id = donnee[index].id;
            console.log(id,'id');
            item.id = id;
            window.location=`../HTML/details.html?${item.id}`
          });
    })
    
  }