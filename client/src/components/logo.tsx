import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 font-semibold", className)}>
      <a href="/">
      <span className="italic font-extrabold text-green-500">Cred</span>
      <span>Easy</span>
      </a>
    </div>
  )
}

