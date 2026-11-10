import { BriefcaseBusiness, Car, ShoppingBasket } from "lucide-react";
import { formatDate } from "../utils/formatDate";
import { TbFoodsteps } from "react-icons/tb";
import { useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { RiFileUnknowFill } from "react-icons/ri";
const TransactionItems = () => {
	const { transactions, setCount } = useContext(ExpenseContext); // {}

	useEffect(() => setCount(20), []);

	return (
		<div className="divide-y divide-slate-100">
			{transactions?.map((transaction) => {
				const Icon =
					transaction.category == "salary" ? BriefcaseBusiness
					: transaction.category == "transport" ? Car
					: transaction.category == "foods" ? TbFoodsteps
					: transaction.category == "shopping" ? ShoppingBasket
					: RiFileUnknowFill;

				const isIncome = transaction.type === "income";

				return (
					<div key={transaction.id} className="flex items-center gap-3 py-4">
						<div
							className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
								isIncome ?
									"bg-green-50 text-green-600"
								:	"bg-red-50 text-red-500"
							}`}
						>
							<Icon size={21} />
						</div>

						<div className="min-w-0 flex-1">
							<h3 className="truncate text-sm font-semibold text-slate-800">
								{transaction.title}
							</h3>
							<p className="mt-1 text-xs text-slate-400">
								{transaction.category}
							</p>
							<p className="mt-1 text-xs text-slate-400 sm:hidden">
								{transaction.date}
							</p>
						</div>

						<div className="hidden text-xs text-slate-500 sm:block sm:w-24">
							{formatDate(transaction.date)}
						</div>

						<div className="text-right">
							<p
								className={`whitespace-nowrap text-sm font-bold ${
									isIncome ? "text-green-600" : "text-red-500"
								}`}
							>
								{isIncome ? "+" : "-"} ৳{" "}
								{transaction.amount.toLocaleString("en-BD")}
							</p>

							<div className="mt-2 flex justify-end gap-1">
								<button
									type="button"
									aria-label="Edit transaction"
									className="rounded-md p-1.5 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
								>
									{/* <Pencil size={15} /> */}
								</button>
								<button
									type="button"
									aria-label="Delete transaction"
									className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
								>
									{/* <Trash2 size={15} /> */}
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TransactionItems;
