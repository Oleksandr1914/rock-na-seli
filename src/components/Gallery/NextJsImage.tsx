import Image, { StaticImageData } from "next/image";
import {
    RenderSlideProps,
    isImageFitCover,
    useLightboxProps,
    isImageSlide,
    Slide,
} from "yet-another-react-lightbox";
import type { RenderPhotoProps } from "react-photo-album";
export function NextJsImageAlbum({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <Image
                fill
                src={photo}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
}

function isNextJsImage(slide: Slide): slide is StaticImageData {
    return (
        isImageSlide(slide) &&
        typeof slide.width === "number" &&
        typeof slide.height === "number"
    );
}


export function NextJsImage({
    slide,
    rect,
}: Pick<RenderSlideProps, "slide" | "rect">) {
    const { imageFit } = useLightboxProps().carousel;
    const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

    if (!isNextJsImage(slide)) return undefined;

    const width = !cover
        ? Math.round(
            Math.min(rect.width, (rect.height / slide.height) * slide.width)
        )
        : rect.width;

    const height = !cover
        ? Math.round(
            Math.min(rect.height, (rect.width / slide.width) * slide.height)
        )
        : rect.height;

    return (
        <div style={{ position: "relative", width, height }}>
            <Image
                fill
                alt="image rock concert"
                src={slide}
                loading="lazy"
                draggable={false}
                placeholder={slide.blurDataURL ? "blur" : undefined}
                style={{ objectFit: cover ? "cover" : "contain" }}
                sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
            />
        </div>
    );
}
