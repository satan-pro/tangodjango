import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const currentLoans = [
  {
    type: "Personal Loan",
    amount: "₹10,000",
    interestRate: "5.5%",
    remainingBalance: "₹8,500",
    status: "Active",
  },
  {
    type: "Home Loan",
    amount: "₹200,000",
    interestRate: "3.2%",
    remainingBalance: "₹180,000",
    status: "Active",
  },
  {
    type: "Car Loan",
    amount: "₹150,000",
    interestRate: "4.8%",
    remainingBalance: "₹0",
    status: "Paid",
  },
  {
    type: "Education Loan",
    amount: "₹30,000",
    interestRate: "4.5%",
    remainingBalance: "₹25,000",
    status: "Active",
  },
]

const paymentHistory = [
  {
    id: "220905172",
    name: "Gaurav Gupta",
    emi: "₹450",
    type: "Personal",
    date: "21/01/2025",
    status: "Failed",
  },
  {
    id: "220905173",
    name: "Gaurav Gupta",
    emi: "₹2,000",
    type: "Home",
    date: "21/11/2024",
    status: "Failed",
  },
  {
    id: "220905174",
    name: "Gaurav Gupta",
    emi: "₹2,000",
    type: "Home",
    date: "21/10/2024",
    status: "Failed",
  },
  {
    id: "220905175",
    name: "Gaurav Gupta",
    emi: "₹1,500",
    type: "Car",
    date: "21/09/2024",
    status: "Pass",
  },
  {
    id: "220905176",
    name: "Gaurav Gupta",
    emi: "₹500",
    type: "Education",
    date: "21/08/2024",
    status: "Pass",
  },
]

export function PostLoanView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Loan Dashboard</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Loan Details & Repayment Schedule</CardTitle>
          <CardDescription>Overview of your current loan and upcoming payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium">Loan Amount</p>
              <p className="text-2xl font-bold">₹25,000</p>
            </div>
            <div>
              <p className="text-sm font-medium">Interest Rate</p>
              <p className="text-2xl font-bold">5.5%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Tenure</p>
              <p className="text-2xl font-bold">5 Years</p>
            </div>
            <div>
              <p className="text-sm font-medium">EMI</p>
              <p className="text-2xl font-bold">₹450</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Interest</p>
              <p className="text-2xl font-bold">₹2,000</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Amount</p>
              <p className="text-2xl font-bold">₹27,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Loans</CardTitle>
          <CardDescription>Track all your loans at one place!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loan Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Interest Rate</TableHead>
                <TableHead>Remaining Balance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentLoans.map((loan, index) => (
                <TableRow key={index}>
                  <TableCell>{loan.type}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>{loan.interestRate}</TableCell>
                  <TableCell>{loan.remainingBalance}</TableCell>
                  <TableCell>
                    <Badge variant={loan.status === "Active" ? "default" : "secondary"}>{loan.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Track your past payments and their status</CardDescription>
            </div>
            <Button variant="outline">View More</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>EMI</TableHead>
                <TableHead>Loan Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.name}</TableCell>
                  <TableCell>{payment.emi}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "Pass" ? "default" : "destructive"}>{payment.status}</Badge>
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
