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
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.negative ? "text-red-500" : "text-muted-foreground"}`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
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

