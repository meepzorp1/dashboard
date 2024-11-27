import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BudgetItem } from "./page"

type BudgetChartProps = {
  items: BudgetItem[]
}

export default function BudgetChart({ items }: BudgetChartProps) {
  const chartData = items.map((item) => ({
    category: item.category,
    projected: item.projected,
    actual: item.actual,
  }))

  return (
    <ChartContainer
      config={{
        projected: {
          label: "Projected",
          color: "hsl(var(--chart-1))",
        },
        actual: {
          label: "Actual",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="projected" fill="var(--color-projected)" name="Projected" />
          <Bar dataKey="actual" fill="var(--color-actual)" name="Actual" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

