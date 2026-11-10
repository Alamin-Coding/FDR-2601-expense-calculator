import React, { useState } from "react";

const RandomPasswordGenerator = () => {
	let passArray = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		0,
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let newPass = Array.from({ length: 6 })
		.map((_i) => passArray[Math.floor(Math.random() * passArray.length)])
		.join("");
	console.log(newPass);
	const [password, setPassword] = useState(newPass);

	const handleGanaratePassword = () => {
		setPassword(newPass);
	};

	const totalAmount = 1000;
	return (
		<div>
			<div className="container">
				<h2>Random Password Generator</h2>
				<p>Password: {password}</p>
				<div>
					<button
						className="bg-amber-50 text-slate-600 p-2 cursor-pointer"
						onClick={() => handleGanaratePassword()}
					>
						Generate Randon Password
					</button>
				</div>
			</div>
		</div>
	);
};

export default RandomPasswordGenerator;
