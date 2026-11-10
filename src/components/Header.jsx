import { Plus } from "lucide-react";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Header = () => {
	const {count} = useContext(ExpenseContext)
	return (
		<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
			<div>
				<h1 className="text-3xl font-bold text-slate-900">Expense Tracker</h1>
				<p className="mt-2 text-sm text-slate-500">
					Manage your income and expenses in one place. {count}
				</p>
			</div>

			<button
				type="button"
				className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
			>
				<Plus size={20} />
				Add Transaction
			</button>
		</div>
	);
};

export default Header;
