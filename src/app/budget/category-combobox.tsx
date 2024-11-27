"use client"

import React, { useEffect } from "react"
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const defaultCategories = [
  "Groceries",
  "Rent",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Healthcare",
  "Dining Out",
  "Savings",
  "Investments",
  "Salary",
  "Freelance Income",
]

interface CategoryComboboxProps {
  value: string
  onChange: (value: string) => void
}

export function CategoryCombobox({ value, onChange }: CategoryComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [categories, setCategories] = React.useState<string[]>(defaultCategories || []);

  console.log('categories', categories);

  useEffect(() => {
    if (value === '') return
    setCategories([...categories, value])
    console.log(Array.isArray(categories), categories);
    console.log('typeof value', typeof value);
  }, []);

  useEffect(() => {
    console.log("categories", categories, "values", typeof value);
  }, [categories]);

  const handleSelect = (currentValue: string) => {
    if (currentValue === "+") {
      const newCategory = value.trim()
      if (newCategory === '') return
      if (newCategory && !categories.includes(newCategory)) {
        setCategories([...categories, newCategory])
      }
      onChange(newCategory)
    } else {
      onChange(currentValue)
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value || "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
     <PopoverContent className="w-full p-0">
         <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
          <CommandEmpty>
            No category found.
            <Button
              variant="ghost"
              className="ml-auto"
              onClick={() => handleSelect("+")}
            >
              Add "{value}"
            </Button>
  </CommandEmpty>
           <CommandGroup>
         {Array.isArray(categories) &&
            categories.map((category) => (
               <CommandItem
                 key={category}
                 onSelect={() => handleSelect(category)}
               >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category ? "opacity-100" : "opacity-0"
                  )}
                />
                 {category}
               </CommandItem>
            ))}
           </CommandGroup>
           </CommandList> 
         </Command>  
       </PopoverContent>
    </Popover>
  )
}




// its in setCategory = Value;