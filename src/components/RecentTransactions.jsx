import TransactionItems from "./TransactionItems";


const RecentTransactions = ({transactions}) => {
	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-3">
			<div className="mb-6 flex items-center justify-between gap-3">
				<div>
					<h2 className="text-xl font-bold text-slate-900">
						Recent Transactions
					</h2>
					<p className="mt-1 text-sm text-slate-500">
						Your latest financial activities.
					</p>
				</div>

				<button
					type="button"
					className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
					aria-label="More options"
				>
					{/* <Ellipsis size={22} /> */}
				</button>
			</div>

			{/* Search and Filter UI */}
			<div className="mb-5 flex flex-col gap-3 sm:flex-row">
				<input
					type="search"
					placeholder="Search transactions..."
					className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
				/>

				<select
					defaultValue="all"
					aria-label="Filter transactions"
					className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500"
				>
					<option value="all">All Transactions</option>
					<option value="income">Income</option>
					<option value="expense">Expenses</option>
				</select>
			</div>

			{/* Table Header */}
			<div className="hidden grid-cols-12 gap-2 border-b border-slate-100 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid">
				<span className="col-span-6">Transaction</span>
				<span className="col-span-3">Date</span>
				<span className="col-span-3 text-right">Amount</span>
			</div>

			{/* Transaction Items */}
			<TransactionItems/> 

			{/* Footer */}
			<div className="mt-5 border-t border-slate-100 pt-4 text-center">
				<button
					type="button"
					className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
				>
					View All Transactions →
				</button>
			</div>
		</section>
	);
};

export default RecentTransactions;
