import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
<<<<<<< HEAD
    <div className={cn("flex items-center gap-1 font-semibold", className)}>
      <a href="/">
      <span className="italic font-extrabold text-green-500">Cred </span>
=======
    <div className={cn("flex items-center font-semibold text-3xl", className)}>
      <a href="/">
      <span className="italic font-extrabold text-green-500 ">Cred </span>
>>>>>>> 6247d950489b7afdd181c4d20113bba56d745b43
      <span>Easy</span>
      </a>
    </div>
  )
}

