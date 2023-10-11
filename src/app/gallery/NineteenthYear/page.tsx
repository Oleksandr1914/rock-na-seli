import Gallery from "@/components/Gallery/Gallery";

export default function NineteenthYear() {
    return (
        <section className="relative px-5 py-2 min-h-[calc(100vh-145px)] mobile:w-[480px] mobile:min-h-[calc(100vh-171px)] mobile:mx-auto tablet:min-h-[calc(100vh-187px)] tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:min-h-[calc(100vh-202px)] laptop:w-[1024px] leptop:px-10 laptop:pt-5 laptop:pb-6 desktop::min-h-[calc(100vh-214px)] desktop:w-[1280px] desktop:px-14">
            <Gallery year='NineteenthList' />
        </section>
    )
}