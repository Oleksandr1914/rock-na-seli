'use client'
import Link from "next/link";
import { PLink } from "./Links.props";
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Links({ children, href, size = 'm' }: PLink): JSX.Element {
    const [isActive, setIsActive] = useState<string>('')
    const [isActiveGallery, setIsActiveGallery] = useState<string>('')
    const pathname = usePathname();
    const segment = useSelectedLayoutSegment()

    let className = '';
    size === "m" ? className = 'font-medium text-xl tracking-wider desktop:text-2xl' : className = 'font-normal text-lg tracking-wide mobile:text-xl mobile:tracking-wider'


    useEffect(() => {
        segment === href.slice(1) ? setIsActiveGallery('active') : setIsActiveGallery('')
        pathname === href ? setIsActive('active') : setIsActive('')
    }, [pathname])


    return (
        <Link href={href} className={cn(isActiveGallery, isActive, className)}>{children}</Link>
    )
}