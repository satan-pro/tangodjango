"use client"

import { Bell, Phone, Search, Settings } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"

export function UserNav() {
  return (
    <div className="flex flex-col w-full gap-4 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Search Section */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search for banks, interest rates..." className="pl-8" />
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4">

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <ThemeToggle/>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 pl-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSYC4HKdQ6OjNxeBUBWSO97MZRBIPB.png"
                    alt="User"
                  />
                  <AvatarFallback>GG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Gaurav Gupta</span>
                  <span className="text-xs text-muted-foreground">Account Settings</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold inline-flex">Welcome back, Gaurav</h1>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Primary
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            Member
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Phone className="h-4 w-4 text-red-500" />
            Customer Support
          </Button>
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4 text-red-500" />
            Raise Alert
          </Button>
        </div>
      </div>
    </div>
  )
}

