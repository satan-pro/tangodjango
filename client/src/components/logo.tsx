import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 font-semibold", className)}>
      <span className="italic font-extrabold text-green-500 text-3xl">Cred</span>
      <span className="text-3xl">Easy</span>
    </div>
  )
}

