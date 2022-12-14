import iconArrowUpURL from "../public/icones/icon-arrow-up.svg";
import iconArrowDownURL from "../public/icones/icon-arrow-down.svg";

const buttons = document.querySelectorAll(".drop-down");
const cardsMoreInfo = document.querySelectorAll("#more-info");

// Animação dos Card's
buttons.forEach((element, index) => {
	try {
		element.addEventListener("click", () => {
			// Veirifca se as informações estão escondidas ou exibidas
			const result = cardsMoreInfo[index].classList.contains("more-info-area-hidden");

			//// Troca a classe da div more info para esconder ou mostrar e altera o estilo do botão

			// Se estive escondido mostra
			if (result) {
				cardsMoreInfo[index].classList.replace("more-info-area-hidden", "more-info-area");
				element.setAttribute("style", "background: #7A2B58");
				element.childNodes[1].setAttribute("src", iconArrowUpURL);
				element.childNodes[1].setAttribute("alt", "Icone totalmente verde claro de uma seta para cima");
				element.setAttribute("alt", "Exibir menos");

			} else {
				cardsMoreInfo[index].classList.replace("more-info-area", "more-info-area-hidden");
				element.setAttribute("style", "background: #fff");
				element.childNodes[1].setAttribute("src", iconArrowDownURL);
				element.childNodes[1].setAttribute("alt", "Icone totalmente branco de uma seta para baixo");
				element.setAttribute("alt", "Exibir mais");
			}
		});
	} catch (error) {
		console.log(error);
	}
});