import Links from "@/components/Links/Links";


export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <ul className=' flex items-center justify-center gap-6 tablet:gap-8 laptop:gap-10'>
                <li>
                    <Links href="/gallery/EighteenYear">2018</Links>
                </li>
                <li>
                    <Links href="/gallery/NineteenthYear">2019</Links>
                </li>
                <li>
                    <Links href="/gallery/TwentyFirstYear">2021</Links>
                </li>

            </ul>
            {children}
        </div>
    );
}