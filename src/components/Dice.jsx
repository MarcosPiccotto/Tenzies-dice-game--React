export default function Dice({ value , isHeld, holdDice, id}) {
	const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    return (
		<div style={styles} onClick={holdDice} className="dice">
			<p>{value}</p>
		</div>
	);
}
