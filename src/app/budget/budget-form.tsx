"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CategoryCombobox } from "./category-combobox"
import { BudgetItem } from "./page"

type BudgetFormProps = {
  onSubmit: (item: BudgetItem) => void
  initialData: BudgetItem | null
}

export default function BudgetForm({ onSubmit, initialData }: BudgetFormProps) {
  const [item, setItem] = useState<BudgetItem>({
    id: "",
    category: "",
    type: "expense",
    projected: 0,
    actual: 0,
  })

  useEffect(() => {
    if (initialData) {
      setItem(initialData)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(item)
    setItem({ id: "", category: "", type: "expense", projected: 0, actual: 0 })
  }

  const handleCategoryChange = (value: string) => {
    console.log('value from form', value);
    setItem((prevItem) => ({ ...prevItem, category: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="category">Category</Label>
        <CategoryCombobox
          value={item.category}
          onChange={handleCategoryChange}
        />
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Select value={item.type} onValueChange={(value) => setItem((prevItem) => ({ ...prevItem, type: value as "income" | "expense" }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="income">Income</SelectItem>
            <SelectItem value="expense">Expense</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="projected">Projected Amount</Label>
        <Input
          id="projected"
          type="number"
          value={item.projected}
          onChange={(e) => setItem((prevItem) => ({ ...prevItem, projected: parseFloat(e.target.value) || 0 }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="actual">Actual Amount</Label>
        <Input
          id="actual"
          type="number"
          value={item.actual}
          onChange={(e) => setItem((prevItem) => ({ ...prevItem, actual: parseFloat(e.target.value) || 0 }))}
          required
        />
      </div>
      <Button type="submit">{initialData ? "Update" : "Add"} Item</Button>
    </form>
  )
}

