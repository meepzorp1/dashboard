import { Bell, Search, User, LogIn } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
      <MobileMenu />
      <div className="flex items-center space-x-4 flex-grow">
        <div className="relative flex-grow max-w-md">
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
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
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
        </Button>
      </div>
    </header>
  )
}

