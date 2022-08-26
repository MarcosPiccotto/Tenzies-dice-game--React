import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Dice from "./components/Dice";
function App() {
	//Version mia que estaba buena, pero no funcionaba del todo bien
	// const allNewDices = [...Array(10)].map((_, i) => {
	// 	console.log("hola")
	// 	let value = Math.floor(Math.random() * 6) + 1;
	// 	return value;
	// });

	// const [dice, setDice] = useState(allNewDices);

	// const diceElements = dice.map((item) => <Dice value={item} />);

	// const [dice, setDice] = useState(allNewDice());
	const [dice, setDice] = useState(allNewDice());

	// Only for a new game
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}
	
	
	function rollDice() {
		setDice((oldice) =>
			oldice.map((die) => {
				return die.isHeld
					? die
					: {
						value: Math.ceil(Math.random() * 6),
						isHeld: false,
						id: nanoid(),
					};
			})
		);
	}

	function holdDice(id) {

		setDice((prevDice) =>
			prevDice.map((item) => {
				return item.id === id
					? { ...item, isHeld: !item.isHeld }
					: item;
			})
		);
	}

	const diceElements = dice.map((die) => (
		<Dice
			key={die.id}
			isHeld={die.isHeld}
			value={die.value}
			id={die.id}
			holdDice={() => holdDice(die.id)}
		/>
	));

	return (
		<div>
			<main>
				<h1 className="title">Tenzies</h1>
				<p className="instructions">Roll until all dice are the same. Click each die to freeze</p>
				<div className="dice-container">{diceElements}</div>
				<button onClick={rollDice} className="roll-dice">
					Roll
				</button>
			</main>
		</div>
	);
}

export default App;
