import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { CalendarDays, ChevronDown, Plus, TrendingDown, TrendingUp } from "lucide-react";

const Form = () => {

    	const {
		transactionValue,
		setTransactionValue,
		transactions,
		setTransactions,
	} = useContext(ExpenseContext);

	const handleAddTransaction = (e) => {
		e.preventDefault();

		setTransactions((prev) => {
			return [...prev, transactionValue];
		});
	};

	return (
		<form className="space-y-5" onSubmit={(e) => handleAddTransaction(e)}>
			{/* Title */}
			<div>
				<label
					htmlFor="title"
					className="mb-2 block text-sm font-semibold text-slate-700"
				>
					Transaction Title
				</label>
				<input
					id="title"
					type="text"
					name="title"
					value={transactionValue.title}
					onChange={(e) =>
						setTransactionValue((prev) => ({
							...prev,
							title: e.target.value,
						}))
					}
					placeholder="e.g. Grocery Shopping"
					className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
				/>
			</div>

			{/* Amount */}
			<div>
				<label
					htmlFor="amount"
					className="mb-2 block text-sm font-semibold text-slate-700"
				>
					Amount (৳)
				</label>
				<input
					id="amount"
					type="number"
					name="amount"
					value={transactionValue.amount}
					onChange={(e) =>
						setTransactionValue((prev) => ({
							...prev,
							amount: Number(e.target.value),
						}))
					}
					min="0"
					placeholder="Enter amount"
					className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
				/>
			</div>

			{/* Transaction Type */}
			<div>
				<p className="mb-2 text-sm font-semibold text-slate-700">
					Transaction Type
				</p>

				<div className="grid grid-cols-2 gap-3">
					<label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-3 text-sm font-medium text-green-700">
						<input
							type="radio"
							value="income"
							name="type"
							onChange={(e) =>
								setTransactionValue((prev) => ({
									...prev,
									type: e.target.value,
								}))
							}
							className="accent-green-600"
						/>
						<TrendingUp size={18} />
						Income
					</label>

					<label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-3 text-sm font-medium text-red-600">
						<input
							type="radio"
							name="type"
							value="expense"
							onChange={(e) =>
								setTransactionValue((prev) => ({
									...prev,
									type: e.target.value,
								}))
							}
							defaultChecked
							className="accent-red-600"
						/>
						<TrendingDown size={18} />
						Expense
					</label>
				</div>
			</div>

			{/* Category */}
			<div>
				<label
					htmlFor="category"
					className="mb-2 block text-sm font-semibold text-slate-700"
				>
					Category
				</label>
				<div className="relative">
					<select
						id="category"
						// defaultValue=""
						name="category"
						value={transactionValue.category}
						onChange={(e) =>
							setTransactionValue((prev) => ({
								...prev,
								category: e.target.value,
							}))
						}
						className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
					>
						<option value="" disabled>
							Select category
						</option>
						<option value="food">Food & Grocery</option>
						<option value="transport">Transport</option>
						<option value="shopping">Shopping</option>
						<option value="bills">Bills & Utilities</option>
						<option value="health">Health</option>
						<option value="salary">Salary</option>
						<option value="other">Other</option>
					</select>
					<ChevronDown
						size={18}
						className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
					/>
				</div>
			</div>

			{/* Date */}
			<div>
				<label
					htmlFor="date"
					className="mb-2 block text-sm font-semibold text-slate-700"
				>
					Date
				</label>
				<div className="relative">
					<input
						id="date"
						type="date"
						name="date"
						value={transactionValue.date}
						onChange={(e) =>
							setTransactionValue((prev) => ({
								...prev,
								date: e.target.value,
							}))
						}
						className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
					/>
					<CalendarDays
						size={18}
						className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
					/>
				</div>
			</div>

			{/* Note */}
			<div>
				<label
					htmlFor="note"
					className="mb-2 block text-sm font-semibold text-slate-700"
				>
					Note (Optional)
				</label>
				<textarea
					id="note"
					rows="3"
					name="note"
					value={transactionValue.note}
					onChange={(e) =>
						setTransactionValue((prev) => ({
							...prev,
							note: e.target.value,
						}))
					}
					placeholder="Write a short note..."
					className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
				/>
			</div>

			{/* Submit */}
			<button
				type="submit"
				className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
			>
				<Plus size={20} />
				Add Transaction
			</button>
		</form>
	);
};

export default Form;
