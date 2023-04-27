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