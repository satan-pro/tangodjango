import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BankCardProps {
  name: string
  interestRate: string
  tenure: string
  processingFee: string
}

export function BankCard({ name, interestRate, tenure, processingFee }: BankCardProps) {
  const logoFileName = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

    const goodName = name
    .replace(/\s+/g, " ")
    .replace(/[^A-Za-z0-9-]/g, " ")

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={`/bank-logos/${logoFileName}.png`}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="object-contain"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-logo.png"
          }}
        />
        <CardTitle className="text-lg">{goodName}</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="font-medium">Interest Rate:</dt>
          <dd>{interestRate}</dd>
          <dt className="font-medium">Tenure:</dt>
          <dd>{tenure}</dd>
          <dt className="font-medium">Processing Fee:</dt>
          <dd>{processingFee}</dd>
        </dl>
      </CardContent>
    </Card>
  )
}

