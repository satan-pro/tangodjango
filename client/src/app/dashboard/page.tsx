"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { PostLoanView } from "./post-loan-view"

const formSchema = z.object({
  personAge: z.string(),
  income: z.string(),
  homeOwnership: z.string(),
  employmentPeriod: z.string(),
  loanGrade: z.string(),
  loanAmount: z.string(),
  loanInterestRate: z.string(),
  loanToIncome: z.string(),
  loanIntent: z.string(),
  creditHistoryLength: z.string(),
})

export default function DashboardPage() {
  const [isApproved, setIsApproved] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personAge: "",
      income: "",
      homeOwnership: "",
      employmentPeriod: "",
      loanGrade: "",
      loanAmount: "",
      loanInterestRate: "",
      loanToIncome: "",
      loanIntent: "",
      creditHistoryLength: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would typically make an API call to your Django backend
    console.log(values)
    setIsApproved(true)
  }

  if (isApproved) {
    return <PostLoanView />
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, Gaurav</h2>
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
                    name="personAge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Person Age</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter age" {...field} />
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
                          <Input placeholder="Enter income" {...field} />
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
                        <FormControl>
                          <Input placeholder="Own/Rent" {...field} />
                        </FormControl>
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
                          <Input placeholder="Years of employment" {...field} />
                        </FormControl>
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
                          <Input placeholder="Enter loan amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="loanIntent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Purpose</FormLabel>
                        <FormControl>
                          <Input placeholder="Personal/Business/Education" {...field} />
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
    </div>
  )
}

