import { useContext } from "react";
import {
	Wallet,
	TrendingUp,
	TrendingDown,
	Plus,
	CalendarDays,
	ChevronDown,
} from "lucide-react";
import { formatNumber } from "../utils/formatNumber";
import Form from "../components/Form";

import RecentTransactions from "./RecentTransactions";
import { ExpenseContext } from "../context/ExpenseContext";
import Header from "./Header";
import SummaryCard from "./SummaryCards";

const ExpenseCalculator = () => {
	const { transactions } = useContext(ExpenseContext);

	const totalIncome =
		transactions
			.filter((item) => item.type == "income")
			.reduce((prev, curr) => prev + curr.amount, 0) ?? 0;
	const totalExpense =
		transactions
			.filter((item) => item.type == "expense")
			.reduce((prev, curr) => prev + curr.amount, 0) ?? 0;
	const availableBalance = totalIncome - totalExpense;

	return (
		<div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<Header />

				{/* Summary Cards */}
				<div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<SummaryCard
						title="Total Income"
						amount={`৳ ${formatNumber(totalIncome)}`}
						icon={TrendingUp}
						color="green"
					/>

					<SummaryCard
						title="Total Expense"
						amount={`৳ ${formatNumber(totalExpense)}`}
						icon={TrendingDown}
						color="red"
					/>

					<SummaryCard
						title="Available Balance"
						amount={`৳ ${formatNumber(availableBalance)}`}
						icon={Wallet}
						color="blue"
					/>
					<SummaryCard
						title="Total Income"
						amount={`৳ ${formatNumber(totalIncome)}`}
						icon={TrendingUp}
						color="green"
					/>

					<SummaryCard
						title="Total Expense"
						amount={`৳ ${formatNumber(totalExpense)}`}
						icon={TrendingDown}
						color="red"
					/>

					<SummaryCard
						title="Available Balance"
						amount={`৳ ${formatNumber(availableBalance)}`}
						icon={Wallet}
						color="blue"
					/>
				</div>

				{/* Main Content */}
				<div className="grid items-start gap-6 lg:grid-cols-5">
					{/* Transaction Form */}
					<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-2">
						<div className="mb-6">
							<h2 className="text-xl font-bold text-slate-900">
								Add New Transaction
							</h2>
							<p className="mt-1 text-sm text-slate-500">
								Enter your transaction details below.
							</p>
						</div>

						{/* Form Here */}
						<Form />
					</section>

					<RecentTransactions transactions={transactions} />
				</div>

				<p className="mt-8 text-center text-xs text-slate-400">
					Expense Tracker UI · Built with React & Tailwind CSS
				</p>
			</div>
		</div>
	);
};

export default ExpenseCalculator;
