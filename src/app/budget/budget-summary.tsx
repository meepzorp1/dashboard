import { BudgetItem } from "./page"

type BudgetSummaryProps = {
  items: BudgetItem[]
}

export default function BudgetSummary({ items }: BudgetSummaryProps) {
  const totalIncome = items
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.actual, 0)

  const totalExpenses = items
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.actual, 0)

  const balance = totalIncome - totalExpenses

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Total Income</h3>
        <p className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Total Expenses</h3>
        <p className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Balance</h3>
        <p className={`text-2xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

