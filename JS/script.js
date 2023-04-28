
//animation texte//


const texteComplet = "La référence pour le choix de vos établissements";
		let index = 0;

		function afficherLettre() {
			const texte = document.querySelector('.main_image>h1');
			texte.innerHTML += texteComplet.charAt(index);
			index++;

			if (index > texteComplet.length - 1) {
				clearInterval(intervalId);
			}
		}

	const intervalId = setInterval(afficherLettre, 100);


	
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
