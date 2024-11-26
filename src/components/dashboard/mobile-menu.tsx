import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User, LogIn } from 'lucide-react'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Switch User
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Switch to</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="John Doe"
                  className="mr-2 h-6 w-6 rounded-full"
                />
                John Doe
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Jane Smith"
                  className="mr-2 h-6 w-6 rounded-full"
                />
                Jane Smith
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Add Account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  )
}

