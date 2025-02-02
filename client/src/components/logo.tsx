import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 font-semibold", className)}>
<<<<<<< HEAD
      <a href="/">
      <span className="italic font-extrabold text-green-500">Cred</span>
      <span>Easy</span>
      </a>
=======
      <span className="italic font-extrabold text-green-500 text-3xl">Cred</span>
      <span className="text-3xl">Easy</span>
>>>>>>> 4f51457a566b3d09e62ec6c509270b47a39d9be3
    </div>
  )
}

