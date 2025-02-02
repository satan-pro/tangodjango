"use client";

import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Banknote, Home, Car, Building2 } from "lucide-react"
import { Logo } from "@/components/logo"
import "./globals.css"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#004D40] to-[#00251A]" suppressHydrationWarning>
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              <Logo />
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Support
              </Link>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">Get Started</Button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="py-16">
            <h1 className="text-6xl font-bold text-white max-w-3xl leading-tight mb-2">
              Optimize Your Investments And Loans Effortlessly
            </h1>
            <p className="text-white/80 text-xl max-w-2xl">
              Smart financial solutions tailored to your needs, with competitive rates and flexible terms.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-12 pb-12">
            {/* Left Column - Loan Types */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-emerald-500/20">
                    <Banknote className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Personal Loan</h3>
                    <p className="text-white/70 text-sm">
                      Flexible funds for your needs, from emergencies to big purchases
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-emerald-500/20">
                    <Home className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Home Loan</h3>
                    <p className="text-white/70 text-sm">Affordable financing to make your dream home a reality</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-emerald-500/20">
                    <Building2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Business Loan</h3>
                    <p className="text-white/70 text-sm">
                      Empower your business with funding tailored to your growth plans
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-full bg-emerald-500/20">
                    <Car className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Auto Loan</h3>
                    <p className="text-white/70 text-sm">Drive your dream car with easy and low-interest auto loans</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Loan Amount Selector */}
            <div className="flex justify-end">
              <Card className="bg-white/95 backdrop-blur border-0 max-w-md w-full">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-6">Select Loan amount</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-6">INR ₹1,00,000</div>
                  <Slider defaultValue={[37000]} max={500000} min={1000} step={1000} className="mb-8" />
                  <div className="flex justify-between text-sm text-gray-600 mb-8">
                    <span>USD ₹1,000</span>
                    <span>USD ₹5,00,000</span>
                  </div>
                  <Link href="/auth/signup">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                    Get Started
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

