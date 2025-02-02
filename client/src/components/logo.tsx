import { cn } from "@/lib/utils"
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center font-semibold text-3xl", className)}>
      <Link href="/">
      <span className="italic font-extrabold text-green-500 ">Cred </span>
      <span>Easy</span>
      </Link>
    </div>
  )
}

