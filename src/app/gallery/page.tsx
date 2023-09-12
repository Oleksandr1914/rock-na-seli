"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Gallery() {
    const route = useRouter();

    useEffect(() => {
        route.push('/gallery/EighteenYear')

    }, [])

    return (
        <div>Gallery</div>
    )
}