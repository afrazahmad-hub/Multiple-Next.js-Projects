import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-evenly mt-4">
      <Link href={"/login"} className="bg-slate-300 rounded px-3 py-1">
        Log in
      </Link>
      <Link href={"/signup"} className="bg-slate-300 rounded px-3 py-1">
        Sign up
      </Link>
      <Link href={"/profile"} className="bg-slate-300 rounded px-3 py-1">
        User Profile
      </Link>
     
    </div>
  );
}
