let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let lizard_div = document.getElementById("l");
let spock_div = document.getElementById("k");


function getComputerChoice() {
	let choices = ['r', 'p', 's', 'l', 'k'];
	let randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	if(letter === "s") return "Scissors";
	if(letter === "l") return "Lizard";
	return "Spock";

}

function win(userChoice, computerChoice) {
	let smallUserWord = "user".fontsize(3).sub();
	let smallCompWord = "comp".fontsize(3).sub();	
	let userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win! 🔥🔥🔥`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
	let smallUserWord = "user".fontsize(3).sub();
	let smallCompWord = "comp".fontsize(3).sub();	
	let userChoice_div = document.getElementById(userChoice);	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You lost! 💩💩💩`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
	let smallUserWord = "user".fontsize(3).sub();
	let smallCompWord = "comp".fontsize(3).sub();	
	let userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} It's a draw! 🍔🍔🍔`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}

// COMBINATIONS
function game(userChoice) {
	let computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "rl":
		case "pr":
		case "pk":
		case "sp":
		case "sl":
		case "lk":
		case "lp":
		case "ks":
		case "kr":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "rk":
		case "ps":
		case "pl":
		case "sr":
		case "sk":
		case "lr":
		case "ls":
		case "kp":
		case "kl":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
		case "ll":
		case "kk":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r")
	);

	paper_div.addEventListener('click', () => game("p")
	);

	scissors_div.addEventListener('click', () => game("s")
	);

	lizard_div.addEventListener('click', () => game("l")
	);

	spock_div.addEventListener('click', () => game("k")
	);
}

main ();
