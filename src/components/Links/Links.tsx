'use client'
import Link from "next/link";
import { PLink } from "./Links.props";
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Links({ children, href, size = 'm', className }: PLink): JSX.Element {
    const [isActive, setIsActive] = useState<string>('')
    const [isActiveGallery, setIsActiveGallery] = useState<string>('')
    const pathname = usePathname();
    const segment = useSelectedLayoutSegment()

    let classSize = '';
    size === "m" ? classSize = 'font-medium text-xl tracking-wider desktop:text-2xl hover:text-hoverColor focus:text-activeLink hover:transition-all' : classSize = 'font-normal text-lg tracking-wide mobile:text-xl mobile:tracking-widerhover:text-hoverColor focus:text-activeLink hover:transition-all'


    useEffect(() => {
        segment === href.slice(1) ? setIsActiveGallery('active') : setIsActiveGallery('')
        pathname === href ? setIsActive('active') : setIsActive('')
    }, [pathname])


    return (
        <Link href={href} className={cn(isActiveGallery, isActive, classSize, className)}>{children}</Link>
    )
}