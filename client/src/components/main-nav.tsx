"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HandCoins, LayoutDashboard, LineChart, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"

const routes = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Loans",
    icon: HandCoins,
    href: "/loans",
  },
  {
    title: "Analytics",
    icon: LineChart,
    href: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === route.href}
                className={cn(
                  "w-full",
                  pathname === route.href ? "bg-primary text-primary-foreground " : "hover:bg-muted",
                )}
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

