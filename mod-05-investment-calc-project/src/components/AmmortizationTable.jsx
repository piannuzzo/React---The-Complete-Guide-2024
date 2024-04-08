import { calculateInvestmentResults, formatter } from "../util/investment"

export default function AmmortizationTable({ investmentValues }) {
	const values = Object.values(investmentValues)
	const hasInvalidValue = values.filter(value => Number.isNaN(value) || value < 0).length > 0
	const data = hasInvalidValue ? [] : calculateInvestmentResults(investmentValues)
	const annualInvestment = investmentValues.annualInvestment
	let totalInterest = 0
	let investedCapital = investmentValues.initialInvestment

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