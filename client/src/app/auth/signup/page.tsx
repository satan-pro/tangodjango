"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import "../../globals.css"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    setLoading(false);

    if (error) {
      alert("Check your console for the error");
      console.error("Signup error:", error.message);
    } else {
      alert("Check your email to confirm your account!");
      router.push("/auth/login"); // Redirect after signup
    }

  //   const { user } = data;
  // if (user) {
  //   const { error: updateError } = await supabase
  //     .from("profiles") // 👈 Ensure this table exists
  //     .insert([
  //       {
  //         auth_id: user.id, // 👈 Link to auth.users table
  //         name,
  //         email,
  //         role,
  //       },
  //     ]);

  //     if (updateError) {
  //       console.error("Error updating user metadata:", updateError.message);
  //     } else {
  //       console.log("User successfully classified as:", role);
  //     }
  //   }

  };

  

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-4">
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
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
