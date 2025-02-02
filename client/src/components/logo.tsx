import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 font-semibold", className)}>
      <span className="italic text-blue-600">Cred</span>
      <span>Easy</span>
    </div>
  )
}

