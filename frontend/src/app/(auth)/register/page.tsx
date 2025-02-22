"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const Register = () => {
    router.push("/login");
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
          <input type="email" placeholder="warwinkblue@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="8UD18ud1" />
        </div>

        <button className="bg-black text-white rounded-sm " onClick={Register}>
          Sign Up
        </button>
        <p className="text-center">
          Already have an account? <Link href={"/"}>Login</Link>
        </p>
        <p>{"\u00A0"}</p>
      </form>
    </main>
  );
}
