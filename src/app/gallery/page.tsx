"use client"
import { useRouter } from "next/router"


export default function Gallery() {
    const route = useRouter();
    route.push('/gallery/EighteenYear')

    return (
        <div>Gallery</div>
    )
}