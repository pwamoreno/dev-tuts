"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, children}){

    const pathname = usePathname()
    const isActive = pathname === href

  return (
    <Link
        href={href}
        className={`px-4 py-2, ${isActive ? "text-tumeric" : "hover:text-tumeric"}`}
    >
        {children}
    </Link>
  )
}

