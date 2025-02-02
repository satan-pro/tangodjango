import React from 'react';
import CardComponent from '@/components/cardComponent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Customers",
    value: "2,103",
    change: "+21%",
  },
  {
    title: "Loan Amount",
    value: "₹400,000",
    change: "+21%",
  },
  {
    title: "Best Customers",
    value: "324",
    change: "+21%",
  },
  {
    title: "Defaulters",
    value: "20",
    change: "+21%",
    negative: true,
  },
]

export default function AnalyticsPage() {

  function handleDefaulters(name: string) {
    if(name==="Defaulters")
      window.location.href = "/defaulters";
  }

  return (
    <div className="space-y-4 p-4 w-[75vw]">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
  <CardComponent key={stat.title} stat={stat} />
))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Overview of loan disbursements and repayments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: "January", disbursed: "₹50,000", repaid: "₹45,000" },
                { month: "February", disbursed: "₹75,000", repaid: "₹60,000" },
                { month: "March", disbursed: "₹100,000", repaid: "₹85,000" },
              ].map((item) => (
                <div key={item.month} className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">{item.month}</div>
                  <div className="flex gap-4">
                    <div className="text-green-500">+{item.disbursed}</div>
                    <div className="text-blue-500">-{item.repaid}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Analysis</CardTitle>
            <CardDescription>Current risk distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { risk: "Low Risk", percentage: "45%", color: "bg-green-500" },
                { risk: "Medium Risk", percentage: "35%", color: "bg-yellow-500" },
                { risk: "High Risk", percentage: "20%", color: "bg-red-500" },
              ].map((item) => (
                <div key={item.risk} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.risk}</span>
                    <span className="font-medium">{item.percentage}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.percentage }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
