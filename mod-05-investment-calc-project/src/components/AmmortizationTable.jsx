import { calculateInvestmentResults, formatter } from "../util/investment"

export default function AmmortizationTable({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
}) {
	const data = calculateInvestmentResults({
		initialInvestment,
		annualInvestment,
		expectedReturn,
		duration,
	})

	let totalInterest = 0
	let investedCapital = initialInvestment

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{
					data.map(row => (
						<tr key={row.year}>
							<td>{row.year}</td>
							<td>{formatter.format(row.valueEndOfYear)}</td>
							<td>{formatter.format(row.interest)}</td>
							<td>{formatter.format(totalInterest += row.interest)}</td>
							<td>{formatter.format(investedCapital += annualInvestment)}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}