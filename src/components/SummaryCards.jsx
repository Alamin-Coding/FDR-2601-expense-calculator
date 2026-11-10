export default function SummaryCard({ title, amount, icon: Icon, color }) {
	const styles = {
		green: {
			card: "border-green-100",
			icon: "bg-green-50 text-green-600",
			text: "text-green-600",
		},
		red: {
			card: "border-red-100",
			icon: "bg-red-50 text-red-500",
			text: "text-red-500",
		},
		blue: {
			card: "border-blue-100",
			icon: "bg-blue-50 text-blue-600",
			text: "text-blue-600",
		},
	};

	const style = styles[color];

	return (
		<div
			className={`rounded-2xl border ${style.card} bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
		>
			<div className="flex items-center justify-between gap-3">
				<p className="text-sm font-medium text-slate-500">{title}</p>
				<div className={`rounded-xl p-3 ${style.icon}`}>
					<Icon size={22} />
				</div>
			</div>

			<p className={`mt-4 text-2xl font-bold ${style.text}`}>{amount}</p>

			<p className="mt-2 text-xs text-slate-400">Overview of your finances</p>
		</div>
	);
}
