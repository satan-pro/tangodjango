"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import "../../globals.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return;
    }

    const user = data.user;
    if (!user) return;

    // Fetch user role from database
    const { data: adminData } = await supabase
      .from("admin")
      .select("auth_id")
      .eq("auth_id", user.id)
      .single();

    if (adminData) {
      router.push("/dashboard"); // Redirect admin
      return;
    }

    const { data: customerData } = await supabase
      .from("customer")
      .select("auth_id")
      .eq("auth_id", user.id)
      .single();

    if (customerData) {
      router.push("/pre-loan-view"); // Redirect customer
      return;
    }

    console.error("User role not found!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Log In
        </button>
      </form>
    </div>
  );
}
