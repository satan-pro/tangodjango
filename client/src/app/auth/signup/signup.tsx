"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Logo } from "../../../components/logo";
import "../../globals.css"

interface SignUpFormData {
  email: string;
  password: string;
}

export default function Signup() {
  const router = useRouter();

  const initialFormData: SignUpFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })

    if (error) {
      alert("Check your console for the error");
      console.error("Signup error:", error.message);
    } else {
        console.log(data);
      alert("Check your email to confirm your account!");
      router.push("/auth/login"); // Redirect after signup
    }
  };

  

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
            <Logo className="text-2xl"/>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Get Started</h1>
          <p className="mt-2 text-gray-600">Welcome to CredEasy - Let&apos;s create your account</p>
        </div>
      </div>

      <hr className={`border-t border-gray-300 my-4`} />

      <form onSubmit={handleSignup} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="johndoe@email.com"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
              Forgot?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
          Sign Up
        </Button>

        <div className="text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-black hover:underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
