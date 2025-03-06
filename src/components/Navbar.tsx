"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl">Food Recipes</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
        Logout
      </button>
    </nav>
  );
}
