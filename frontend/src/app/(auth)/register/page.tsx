"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleRegister = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.push("/login");
    } catch (error) {
      console.error("Click button error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-white text-black min-h-screen min-w-full flex items-center justify-center p-4">
      <form className="h-[400px] w-[300px] border shadow-md p-3 flex flex-col justify-between rounded">
        <p>{"\u00A0"}</p>
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        <div className="grid grid-cols-1">
          <label>Name</label>
          <input
            className="outline-none"
            type="text"
            placeholder="Muhammad Budi Setiawan"
          />
          <label>Email</label>
          <input
            className="outline-none"
            type="email"
            placeholder="warwinkblue@gmail.com"
          />
          <label>Password</label>
          <input
            className="outline-none"
            type="password"
            placeholder="8UD18ud1"
          />
        </div>

        <button
          onClick={handleRegister}
          className="bg-black text-white rounded-sm"
          disabled={loading} // Mencegah user menekan tombol berkali-kali
        >
          {loading ? "Processing..." : "Register"}
        </button>
        <p className="text-center">
          Already have an account? <Link href={"/login"}>Login</Link>
        </p>
        <p>{"\u00A0"}</p>
      </form>
    </main>
  );
}
