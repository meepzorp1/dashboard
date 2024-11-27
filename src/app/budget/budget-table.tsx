import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { BudgetItem } from "./page"

type BudgetTableProps = {
  items: BudgetItem[]
  onDelete: (id: string) => void
  onEdit: (item: BudgetItem) => void
}

export default function BudgetTable({ items, onDelete, onEdit }: BudgetTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Projected</TableHead>
          <TableHead>Actual</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>${item.projected.toFixed(2)}</TableCell>
            <TableCell>${item.actual.toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" onClick={() => onEdit(item)} className="mr-2">
                Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={() => onDelete(item.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

