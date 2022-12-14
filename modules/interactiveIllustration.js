const bigCircle = document.querySelector("#big-circle");
const interactiveMessage = document.querySelector("#big-circle > p");
const illustration = document.querySelector("#interactive-svg");

//// Animação do circulo interativo


// Altera o tamanho da illustração
window.addEventListener("resize", () => {
	if (document.body.clientWidth >= 1365) {
		illustration.setAttribute("width", "600.11");
		illustration.setAttribute("height", "614.68");
	} else {
		illustration.setAttribute("width", "345.668");
		illustration.setAttribute("height", "320");
	}
});

// Referencia dos botões
const redCircle = {
	id: "Grupo_126544",
	element: document.getElementById("Grupo_126544"),
	color: "#FF3737",
	message: "Texto referente ao botão que está sobre a flecha <strong>vermelha</strong>!",
};

const yellowCircle = {
	id: "Grupo_126547",
	element: document.getElementById("Grupo_126547"),
	color: "#FFCC33",
	message: "Este texto é referente ao botão que está sobre a flecha <strong>amarela</strong>!",
};

const greyCircle = {
	id: "Grupo_126546",
	element: document.getElementById("Grupo_126546"),
	color: "#707070",
	message: "Aqui está sendo apresentado o texto do botão que está sobre a flecha <strong>cinza</strong>!",
};

// Array de ciruclos
const circles = [redCircle, greyCircle, yellowCircle];

// icones de + e -
const lessIcon = document.getElementById("Caminho_187625").cloneNode(true);
const plusIcon = document.getElementById("Caminho_187624").cloneNode(true);

// função que altera o icone
function changeIcon({ element, color, message }) {
	try {
		const circle = element.childNodes[1].childNodes[1]; // Refencia da do botão atual


		// Lista de icones de +
		const plusIconsIds = ["Caminho_187626", "Caminho_187624"];
		const iconsIds = [plusIconsIds, "Caminho_187625"].flat();

		// Limpa os filhos
		const removeChilds = (item = element) => {
			item.childNodes.forEach((node, index) => {
				if (iconsIds.includes(node?.id)) {
					item.removeChild(item.childNodes[index]);
				}
			});
		};

		// Resetar os botões para o estado positivo
		circles.forEach(({ element: elementHere }) => {
			if (element?.id !== elementHere?.id) {
				removeChilds(elementHere); // Remove todos os filhos do componente
				elementHere.append(plusIcon.cloneNode(true)); // Adicionar o icone de  +
				const circleHere = elementHere.childNodes[1].childNodes[1]; // Refencia da do botão atual
				circleHere.setAttribute("fill", "#03B5B0"); // Adicionar a cor azul
			}
		});

		// Verifica se o icone é de + ou de -
		const nodes = [...element.childNodes];
		const isPlusIcon = nodes.some(item => plusIconsIds.includes(item?.id));
		if (isPlusIcon) {
			removeChilds();
			element.append(lessIcon.cloneNode(true));
			circle.setAttribute("fill", "#7A2B58");

			// Estilização do circulo central
			bigCircle.setAttribute("style", `background: ${color}`);
			interactiveMessage.innerHTML = message;
			interactiveMessage.setAttribute("style", "color: #000");
		}
		else {
			removeChilds();
			element.append(plusIcon.cloneNode(true));
			circle.setAttribute("fill", "#03B5B0");
			bigCircle.setAttribute("style", "display: none");
		}
	} catch (error) {
		console.log(error);
	}
}

// Listeners que ouvem a interação do usuario
redCircle.element.addEventListener("click", () => changeIcon({ ...redCircle }));
greyCircle.element.addEventListener("click", () => changeIcon({ ...greyCircle }));
yellowCircle.element.addEventListener("click", () => changeIcon({ ...yellowCircle }));