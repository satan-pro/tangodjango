import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center font-semibold text-3xl", className)}>
      <a href="/">
      <span className="italic font-extrabold text-green-500 ">Cred </span>
      <span>Easy</span>
      </a>
    </div>
  )
}

