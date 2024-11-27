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

const categories = [
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

let value = '';

interface CategoryComboboxProps {
  value: string
  onChange: (value: string) => void
}

export default function TestingPage() {
    const handleSelect = (currentValue: string) => {
        console.log('currentValue', currentValue);
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                        >
                        {value || "Select category..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandList>
                      <CommandEmpty>
                            No categories found.
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
        </div>
    )   
}