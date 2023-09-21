"use client"
import { useAppDispatch, useAppSelector } from "@/hook/hookStore";
import { PGallery, PhotosType } from "./Gallery.props";
import { useEffect, useState } from "react";
import { fetchEighteenList, fetchNineteenthList, fetchTwentyFirstList } from "@/store/Gallery/galleryOperation";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";
import { Bars } from 'react-loader-spinner'


export default function Gallery({ children, year }: PGallery): JSX.Element {
    const { TwentyFirstList, NineteenthList, EighteenList, loading } = useAppSelector(state => state.rock.gallery)
    const dispatch = useAppDispatch();
    const [photos, setPhotos] = useState<PhotosType[]>([])
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        if (year === 'EighteenList') {
            dispatch(fetchEighteenList())
        } else if (year === 'NineteenthList') {
            dispatch(fetchNineteenthList())
        } else if (year === 'TwentyFirstList') {
            dispatch(fetchTwentyFirstList())
        }
    }, [dispatch, year])

    useEffect(() => {
        let newArray: PhotosType[] = [];

        if (year === 'EighteenList') {
            newArray = EighteenList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height };
            })
        } else if (year === 'NineteenthList') {
            newArray = NineteenthList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height };
            })
        } else if (year === 'TwentyFirstList') {
            newArray = TwentyFirstList?.map(el => {
                return { src: el.secure_url, width: el.width, height: el.height };
            })
        }
        setPhotos(newArray)

    }, [EighteenList, NineteenthList, TwentyFirstList])


    return <section className="py-6 tablet:pt-8 laptop:pt-11">
        {loading ? <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"> <Bars
            height="140"
            width="140"
            color="#ea580cbd"
            ariaLabel="bars-loading"
            visible={true}
        /> </div> :
            < >
                <PhotoAlbum photos={photos} layout="columns" columns={(containerWidth) => {
                    if (containerWidth < 484) return 2;
                    if (containerWidth < 800) return 3;
                    return 4;
                }} onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    render={{ slide: NextJsImage }}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Zoom]}
                />
            </>
        }
    </section>
}


