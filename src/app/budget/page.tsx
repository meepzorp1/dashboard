"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BudgetForm from "./budget-form"
import BudgetTable from "./budget-table"
import BudgetChart from "./budget-chart"
import BudgetSummary from "./budget-summary"

export type BudgetItem = {
  id: string
  category: string
  type: "income" | "expense"
  projected: number
  actual: number
}

export default function BudgetPage() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([])
  const [editingItem, setEditingItem] = useState<BudgetItem | null>(null)

  const addOrUpdateItem = (item: BudgetItem) => {
    if (editingItem) {
      setBudgetItems(budgetItems.map((i) => (i.id === item.id ? item : i)))
    } else {
      setBudgetItems([...budgetItems, { ...item, id: Date.now().toString() }])
    }
    setEditingItem(null)
  }

  const deleteItem = (id: string) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id))
  }

  const editItem = (item: BudgetItem) => {
    setEditingItem(item)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-10">Budget Planner</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add Budget Item</CardTitle>
            <CardDescription>Add or edit your budget items here</CardDescription>
          </CardHeader>
          <CardContent>
            <BudgetForm onSubmit={addOrUpdateItem} initialData={editingItem} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
            <CardDescription>Your budget at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <BudgetSummary items={budgetItems} />
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Budget Details</CardTitle>
          <CardDescription>Manage your budget items</CardDescription>
        </CardHeader>
        <CardContent>
          <BudgetTable items={budgetItems} onDelete={deleteItem} onEdit={editItem} />
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Budget Visualization</CardTitle>
          <CardDescription>Projected vs Actual amounts</CardDescription>
        </CardHeader>
        <CardContent>
          <BudgetChart items={budgetItems} />
        </CardContent>
      </Card>
    </div>
  )
}

