"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { PostLoanView } from "@/app/dashboard/post-loan-view"
import { BankCard } from "@/components/bank-cards"

type BankData = {
  "Bank/NBFC": string
  "Interest Rate (p.a.)": string
  Tenure: string
  "Processing Fee": string
}

const formSchema = z.object({
  age: z.number().min(21, { message: "Age must be at least 21" }),
  homeOwnership: z.enum(["RENT", "OWN", "MORTGAGE", "OTHER"]),
  defaultOnFile: z.enum(["N", "Y"]),
  employmentPeriod: z.number().min(0),
  loanGrade: z.enum(["A", "B", "C", "D", "E", "F", "G"]),
  loanAmount: z.number().positive(),
  loanInterestRate: z.number().min(0).max(100),
  income: z.number().positive(),
  loanIntent: z.enum(["EDUCATION", "MEDICAL", "PERSONAL", "VENTURE", "DEBTCONSOLIDATION", "HOMEIMPROVEMENT"]),
  creditHistoryLength: z.number().min(0),
  loanStatus: z.enum(["Approved", "Rejected", "Pending"]),
})

export default function DashboardPage() {
  const [isApproved, setIsApproved] = useState(false)
  const [loanToIncome, setLoanToIncome] = useState(0)
  const [bankData, setBankData] = useState<BankData[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 21,
      homeOwnership: "RENT",
      defaultOnFile: "N",
      employmentPeriod: 0,
      loanGrade: "A",
      loanAmount: 0,
      loanInterestRate: 0,
      income: 0,
      loanIntent: "PERSONAL",
      creditHistoryLength: 0,
      loanStatus: "Pending",
    },
  })

  useEffect(() => {
    const loanAmount = form.watch("loanAmount")
    const income = form.watch("income")
    if (loanAmount && income) {
      setLoanToIncome((loanAmount / income) * 100)
    }
  }, [form.watch("loanAmount"), form.watch("income"), form]) // Added form to dependencies

  useEffect(() => {
    fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BankNBFC-InterestRatepa-Tenure-ProcessingFee-yMX6FUe42O6AelaTyO4dzbbejc6OHh.csv",
    )
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split("\n").slice(1)
        const data = rows
          .map((row) => {
            const [name, interestRate, tenure, processingFee] = row.split(",").map((item) => item.trim())
            return {
              "Bank/NBFC": name,
              "Interest Rate (p.a.)": interestRate,
              Tenure: tenure,
              "Processing Fee": processingFee,
            }
          })
          .filter((item) => item["Bank/NBFC"] !== "") // Remove empty rows
        setBankData(data)
      })
  }, [])

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would typically make an API call to your Django backend
    console.log(values)
    setIsApproved(true)
  }

  if (isApproved) {
    return <PostLoanView />
  }

  return (
    <div className="flex-1 space-y-4 p-4 w-[75vw]">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Loan Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Predict your Loan Approval</CardTitle>
            <CardDescription>
              We help you with an insight to get an estimate of whether your loan would be approved or not
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter age"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="homeOwnership"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Home Ownership</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select home ownership" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["RENT", "OWN", "MORTGAGE", "OTHER"].map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="defaultOnFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default on File</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select default status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="N">No</SelectItem>
                            <SelectItem value="Y">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employmentPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Period (years)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Years of employment"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="loanGrade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Grade</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan grade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["A", "B", "C", "D", "E", "F", "G"].map((grade) => (
                              <SelectItem key={grade} value={grade}>
                                {grade}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter loan amount"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="loanInterestRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Interest Rate (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter interest rate"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Income (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter income"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormItem>
                    <FormLabel>Loan to Income Ratio (%)</FormLabel>
                    <FormControl>
                      <Input type="number" value={loanToIncome.toFixed(2)} disabled />
                    </FormControl>
                  </FormItem>
                  <FormField
                    control={form.control}
                    name="loanIntent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Intent</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan intent" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "EDUCATION",
                              "MEDICAL",
                              "PERSONAL",
                              "VENTURE",
                              "DEBT CONSOLIDATION",
                              "HOME IMPROVEMENT",
                            ].map((intent) => (
                              <SelectItem key={intent} value={intent}>
                                {intent}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="creditHistoryLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit History Length (years)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter credit history length"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Predict</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>EMI Calculator</CardTitle>
            <CardDescription>Calculate your EMI as per your loan amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Loan Amount</label>
                <Input placeholder="Enter loan amount" />
              </div>
              <div>
                <label className="text-sm font-medium">Loan Tenure (months): 60 months</label>
                <Slider defaultValue={[60]} max={120} step={1} />
              </div>
              <div>
                <label className="text-sm font-medium">Monthly EMI</label>
                <div className="text-2xl font-bold">₹500</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Loan Options</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bankData.map((bank, index) => (
            <BankCard
              key={index}
              name={bank["Bank/NBFC"]}
              interestRate={bank["Interest Rate (p.a.)"]}
              tenure={bank["Tenure"]}
              processingFee={bank["Processing Fee"]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

