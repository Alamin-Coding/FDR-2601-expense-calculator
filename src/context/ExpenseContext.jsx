import { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([]);
	const [transactionValue, setTransactionValue] = useState({
		id: transactions.length + 1,
		title: "",
		category: "",
		date: "",
		amount: 0,
		type: "",
		note: "",
		// icon: BriefcaseBusiness,
	});

	const [count, setCount] = useState(10);

	return (
		<ExpenseContext
			value={{
				transactionValue,
				setTransactionValue,
				transactions,
				setTransactions,
				count,
				setCount,
			}}
		>
			{children}
		</ExpenseContext>
	);
};

export default ExpenseProvider;
