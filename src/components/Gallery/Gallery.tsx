"use client"
import { useAppDispatch, useAppSelector } from "@/hook/hookStore";
import { PGallery, PhotosType } from "./Gallery.props";
import { useEffect, useState } from "react";
import { fetchEighteenList, fetchNineteenthList, fetchTwentyFirstList } from "@/store/Gallery/galleryOperation";
import Image from "next/image";


export default function Gallery({ children, year }: PGallery): JSX.Element {
    const { TwentyFirstList, NineteenthList, EighteenList, loading } = useAppSelector(state => state.rock)
    const dispatch = useAppDispatch();
    const [photos, setPhotos] = useState<PhotosType[]>([])

    useEffect(() => {
        if (year === 'EighteenList') {
            dispatch(fetchEighteenList())
        } else if (year === 'NineteenthList') {
            dispatch(fetchNineteenthList())
        } else if (year === 'TwentyFirstList') {
            dispatch(fetchTwentyFirstList())
        }
        console.log(EighteenList);
        console.log(NineteenthList);
        console.log(TwentyFirstList);

    }, [dispatch, year])

    useEffect(() => {
        let newArray: PhotosType[] = [];

        if (year === 'EighteenList') {
            newArray = EighteenList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height, id: el.asset_id };
            })
        } else if (year === 'NineteenthList') {
            newArray = NineteenthList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height, id: el.asset_id };
            })
        } else if (year === 'TwentyFirstList') {
            newArray = TwentyFirstList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height, id: el.asset_id };
            })
        }
        setPhotos(newArray)

    }, [EighteenList, NineteenthList, TwentyFirstList])


    return <ul className="flex flex-wrap gap-3">
        {photos?.map(el => {
            return <li key={el.id}>
                <Image
                    src={el.src}
                    alt="rock concert"
                    width="200"
                    height="200"

                    priority={true}
                />
            </li>
        })}
    </ul>
}


