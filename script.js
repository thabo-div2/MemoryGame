//  DOM
const gridEl = document.querySelector("#grid");
const scoreEl = document.querySelector("#result");
const messageEl = document.querySelector(".message");

// Creating a elements in JS

const cardArray = [
	{
		name: "fries",
		img: "imgs/fries.png",
	},
	{
		name: "cheeseburger",
		img: "imgs/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "imgs/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "imgs/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "imgs/milkshake.png",
	},
	{
		name: "pizza",
		img: "imgs/pizza.png",
	},
	{
		name: "fries",
		img: "imgs/fries.png",
	},
	{
		name: "cheeseburger",
		img: "imgs/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "imgs/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "imgs/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "imgs/milkshake.png",
	},
	{
		name: "pizza",
		img: "imgs/pizza.png",
	},
];

let cardChosen = [];
let cardsChosenIds = [];
const cardsMatched = [];

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "./imgs/blank.png");
		card.setAttribute("data-id", i);
		card.classList.add("card");
		card.classList.toggle("backside");
		card.addEventListener("click", flipCard);

		gridEl.append(card);
	}
}

createBoard();

function checkMatch() {
	const cards = document.querySelectorAll("#grid img");
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];
	if (optionOneId === optionTwoId) {
		messageEl.textContent = "You clicked on the same message";
		cards[optionOneId].setAttribute("src", "imgs/blank.png");
		cards[optionTwoId].setAttribute("src", "imgs/blank.png");
		// messageEl.textContent = "";
	}
	if (cardChosen[0] === cardChosen[1]) {
		console.log("-");
		cards[optionOneId].setAttribute("src", "imgs/white.png");
		cards[optionTwoId].setAttribute("src", "imgs/white.png");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsMatched.push(cardChosen);
	} else {
		cards[optionOneId].setAttribute("src", "imgs/blank.png");
		cards[optionTwoId].setAttribute("src", "imgs/blank.png");
		messageEl.textContent = "Try Again";
		// messageEl.textContent = "";
	}
	scoreEl.textContent = cardsMatched.length;
	cardChosen = [];
	cardsChosenIds = [];

	if (cardsMatched.length === cardArray.length / 2) {
		messageEl.textContent = "You have got them all";
	}
}

function flipCard() {
	const cardId = this.getAttribute("data-id");

	this.classList.toggle("is-flipped");

	cardChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	this.setAttribute("src", cardArray[cardId].img);
	if (cardChosen.length === 2) {
		setTimeout(checkMatch, 1000);
	}
}
