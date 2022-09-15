const buttons = document.querySelectorAll(".drop-down");
const cardsMoreInfo = document.querySelectorAll("#more-info");


// Animação dos Card's
buttons.forEach((element, index) => {
	try {
		element.addEventListener("click", () => {
			// Veirifca se as informações estão escondidas ou exibidas
			const result = cardsMoreInfo[index].classList.contains("more-info-area-hidden");

			// Troca a classe da div more info para esconde ou mostrar e altera o estilo do botão
			if (result) {
				cardsMoreInfo[index].classList.replace("more-info-area-hidden", "more-info-area");
				element.setAttribute("style", "background: #7A2B58");
				element.childNodes[1].setAttribute("src", "./public/icones/icon-arrow-up.svg");
			} else {
				cardsMoreInfo[index].classList.replace("more-info-area", "more-info-area-hidden");
				element.setAttribute("style", "background: #fff");
				element.childNodes[1].setAttribute("src", "./public/icones/icon-arrow-down.svg");
			}

		});
	} catch (error) {
		console.log(error);
	}
});

const bigCircle = document.querySelector("#big-circle");

// Animação do circulo interativo
const circlesId = {
	top: "Grupo_126547",
	left: "Grupo_126544",
	right: "Grupo_126546"
};

const leftCircle = {
	element: document.getElementById(circlesId.left),
	color: "#FF3737",
	message: "Texto referente ao botão que está sobre a flecha vermelha!",
	textColor: ""
};
const rightCircle = {
	element: document.getElementById(circlesId.top),
	color: "#FFCC33",
	message: "Este texto é referente ao botão que está sobre a flecha amarela!",
	textColor: ""
};
const topCircle = {
	element: document.getElementById(circlesId.right),
	color: "#707070",
	message: "Aqui está sendo apresentado o texto do botão que está sobre a flecha cinza!",
	textColor: ""
};

// icones de + e -
const lessIcon = document.getElementById("Caminho_187625").cloneNode(true);
const plusIcon = document.getElementById("Caminho_187624").cloneNode(true);

function changeIcon({ element, color, message, textColor }) {
	try {
		const circle = element.childNodes[1].childNodes[1];

		// Lista de icones de +
		const plusIconsIds = ["Caminho_187626", "Caminho_187624"];
		const iconsIds = [plusIconsIds, "Caminho_187625"].flat();

		// Limpa os filhos
		const cleanNodes = () => {
			element.childNodes.forEach((node, index) => {
				if (iconsIds.includes(node?.id)) {
					element.removeChild(element.childNodes[index]);
				}
			});
		};

		// Verifica se o icone é de + ou de -
		const nodes = [...element.childNodes];
		const isPlusIcon = nodes.some(item => plusIconsIds.includes(item?.id));
		if (isPlusIcon) {
			cleanNodes();
			element.append(lessIcon.cloneNode(true));
			circle.setAttribute("fill", "#7A2B58");
		}
		else {
			cleanNodes();
			element.append(plusIcon.cloneNode(true));
			circle.setAttribute("fill", "#03B5B0");
		}
		bigCircle.setAttribute("style", `background: ${color}`);
	} catch (error) {
		console.log(error);
	}
}

leftCircle.element.addEventListener("click", () => changeIcon({ ...leftCircle }));
topCircle.element.addEventListener("click", () => changeIcon({ ...topCircle }));
rightCircle.element.addEventListener("click", () => changeIcon({ ...rightCircle }));

