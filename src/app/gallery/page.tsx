"use client"
import { useRouter } from "next/navigation"


export default function Gallery() {
    const route = useRouter();
    route.push('/gallery/EighteenYear')

    return (
        <div>Gallery</div>
    )
}