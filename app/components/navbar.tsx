"use client";

import { FaHome, FaClipboardList, FaCarSide } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <nav className="bg-slate-800 border-t-2 border-slate-700 text-white flex justify-between items-center fixed bottom-0 pb-5 w-full">
            <Link href="/" className={`flex-1 text-[30px] hover:scale-105 transition font-bold p-4 flex justify-center items-center ${isActive("/") ? "text-white" : "text-slate-600 hover:text-white"}`}>
                <FaHome />
            </Link>
            <Link href="/log" className={`flex-1 text-[30px] hover:scale-105 transition font-bold p-4 flex justify-center items-center ${isActive("/log") ? "text-white" : "text-slate-600 hover:text-white"}`}>
                <FaClipboardList />
            </Link>
            <Link href="/car" className={`flex-1 text-[30px] hover:scale-105 transition font-bold p-4 flex justify-center items-center ${isActive("/car") ? "text-white" : "text-slate-600 hover:text-white"}`}>
                <FaCarSide />
            </Link>
        </nav>
    );
}