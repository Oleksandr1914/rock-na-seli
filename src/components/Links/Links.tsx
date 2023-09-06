'use client'
import Link from "next/link";
import { PLink } from "./Links.props";
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Links({ children, href, size = 'm' }: PLink): JSX.Element {
    const [isActive, setIsActive] = useState<string>('')
    const pathname = usePathname();

    let className = '';
    size === "m" ? className = 'font-medium text-xl tracking-wider desktop:text-2xl' : className = 'font-normal text-lg tracking-wide mobile:text-xl mobile:tracking-wider'

    useEffect(() => {
        pathname === href ? setIsActive('text-activeLink after:block after:w-full after:h-0.5 after:rounded-xl after:bg-activeLink hover:activeLink focus:activeLink') : setIsActive('text-textColor hover:text-hoverColor focus:text-hoverColor')
    }, [pathname])


    return (
        <Link href={href} className={cn(isActive, className)}>{children}</Link>
    )
}