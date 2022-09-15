const bigCircle = document.querySelector("#big-circle");
const interactiveMessage = document.querySelector("#big-circle > p");

// Animação do circulo interativo

const redCircle = {
	id: "Grupo_126544",
	element: document.getElementById("Grupo_126544"),
	color: "#FF3737",
	message: "Texto referente ao botão que está sobre a flecha vermelha!",
};

const yellowCircle = {
	id: "Grupo_126547",
	element: document.getElementById("Grupo_126547"),
	color: "#FFCC33",
	message: "Este texto é referente ao botão que está sobre a flecha amarela!",
};

const greyCircle = {
	id: "Grupo_126546",
	element: document.getElementById("Grupo_126546"),
	color: "#707070",
	message: "Aqui está sendo apresentado o texto do botão que está sobre a flecha cinza!",
};

// Array de ciruclos
const circles = [redCircle, greyCircle, yellowCircle];

// icones de + e -
const lessIcon = document.getElementById("Caminho_187625").cloneNode(true);
const plusIcon = document.getElementById("Caminho_187624").cloneNode(true);

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
		}
		else {
			removeChilds();
			element.append(plusIcon.cloneNode(true));
			circle.setAttribute("fill", "#03B5B0");
		}

		// Estilização do circulo central
		bigCircle.setAttribute("style", `background: ${color}`);
		interactiveMessage.innerHTML = message;
		interactiveMessage.setAttribute("style", "color: #000");
	} catch (error) {
		console.log(error);
	}
}

redCircle.element.addEventListener("click", () => changeIcon({ ...redCircle }));
greyCircle.element.addEventListener("click", () => changeIcon({ ...greyCircle }));
yellowCircle.element.addEventListener("click", () => changeIcon({ ...yellowCircle }));