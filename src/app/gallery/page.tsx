"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Gallery() {
    const route = useRouter();

    useEffect(() => {
        route.push('/gallery/EighteenYear')
    }, [])

    return (
        <div className="min-h-[calc(100vh-145px)] mobile:min-h-[calc(100vh-171px)] tablet:min-h-[calc(100vh-187px)] laptop:min-h-[calc(100vh-202px)] desktop::min-h-[calc(100vh-214px)]"></div>
    )
}