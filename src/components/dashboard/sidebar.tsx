import Link from 'next/link'
import React from 'react'
import { Home, BarChart2, Users, Settings, Pickaxe, ShoppingBasket, CalendarDays, Landmark, Lightbulb, Gamepad, TestTubeDiagonal } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Pickaxe, label: 'Chores', href: '/chores' },
  { icon: Landmark, label: 'Budget', href: '/budget' },
  { icon: ShoppingBasket, label: 'Shopping', href: '/shopping' },
  { icon: CalendarDays, label: 'Calendar', href: '/calendar' },
  { icon: Lightbulb, label: 'Ideas', href: '/ideas' },
  { icon: Gamepad, label: 'Games', href: '/games' },
  { icon: TestTubeDiagonal, label: 'Testing', href: '/testing' },
  { icon: BarChart2, label: '', href: '/analytics' },
  { icon: Users, label: '', href: '/customers' },
  { icon: Settings, label: '', href: '/settings' },
]

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gray-800">
      <div className="flex h-16 my-4 items-center justify-center">
        <h1 className="text-2xl font-bold text-red-700">Whats Gooood</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center rounded-lg px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="mr-4 h-6 w-6" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

