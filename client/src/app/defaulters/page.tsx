"use client"

import { Mail, Phone, MoreHorizontal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Dummy data for defaulters
const defaulters = [
  {
    id: 1,
    name: "Rahul Sharma",
    amount: "₹25,000",
    duration: "60 days",
    loanAmount: "₹150,000",
    email: "rahul.s@example.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Priya Patel",
    amount: "₹15,000",
    duration: "45 days",
    loanAmount: "₹80,000",
    email: "priya.p@example.com",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "Amit Kumar",
    amount: "₹50,000",
    duration: "90 days",
    loanAmount: "₹300,000",
    email: "amit.k@example.com",
    phone: "+91 98765 43212",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    amount: "₹35,000",
    duration: "30 days",
    loanAmount: "₹200,000",
    email: "sneha.r@example.com",
    phone: "+91 98765 43213",
  },
  {
    id: 5,
    name: "Rajesh Verma",
    amount: "₹45,000",
    duration: "75 days",
    loanAmount: "₹250,000",
    email: "rajesh.v@example.com",
    phone: "+91 98765 43214",
  },
]

export default function DefaultersPage() {
  const handleMailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  const handleCallClick = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="space-y-4 p-4 w-[80vw]" suppressHydrationWarning>
      <Card>
        <CardHeader>
          <CardTitle>Defaulters</CardTitle>
          <CardDescription>List of loan defaulters and pending amounts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Names</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Loan Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaulters.map((defaulter) => (
                <TableRow key={defaulter.id}>
                  <TableCell className="font-medium">{defaulter.name}</TableCell>
                  <TableCell>{defaulter.amount}</TableCell>
                  <TableCell>{defaulter.duration}</TableCell>
                  <TableCell>{defaulter.loanAmount}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleMailClick(defaulter.email)}>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Mail</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleCallClick(defaulter.phone)}>
                          <Phone className="mr-2 h-4 w-4" />
                          <span>Call</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

