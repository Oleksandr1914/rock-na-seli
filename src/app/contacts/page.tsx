import { GoogleMap } from "@/components/Maps/Maps";
import { Title } from "@/components/Title/Title";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";


export default function Contacts() {
    return (
        <section className="px-5 py-2 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:pt-5 desktop:w-[1280px] desktop:px-14">
            <div>
                <Title tag="h2" className="text-center  text-hoverColor">Контакти</Title>
                <div className="laptop:flex laptop:justify-center laptop:gap-28">
                    <ul className="flex items-center justify-center gap-8 mt-11 laptop:flex-col laptop:items-start"                >
                        <li><a href="https://www.facebook.com/groups/173982049938109/user/100063204370759/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaFacebook className='w-7 h-7 tablet:w-8 tablet:h-8' /><span className="hidden laptop:inline-flex">facebook</span> </a></li>

                        <li><a href="https://www.instagram.com/rocknaseli/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaInstagram className='w-7 h-7 tablet:w-8 tablet:h-8' /><span className="hidden laptop:inline-flex">instagram</span></a></li>
                        <li><a href="https://www.youtube.com/@rock6351" target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaYoutube className='w-7 h-7 tablet:w-8 tablet:h-8' /><span className="hidden laptop:inline-flex">youtube</span></a></li>
                    </ul>
                    <ul className="flex flex-col items-center gap-4 mobile:gap-6 mt-11 laptop:gap-8"                >

                        <li><a href="mailto:rocknaseli@ukr.net"
                            className="font-medium text-lg mobile:text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all desktop:text-2xl"
                        >rocknaseli@ukr.net</a></li>
                        <li><a href="tel:+380673257403"
                            className="font-medium text-lg mobile:text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all desktop:text-2xl"
                        >+380673257403 - Софія Трусенко</a></li>
                        <li><a href="tel:+380976842538"
                            className="font-medium text-lg mobile:text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all desktop:text-2xl"
                        >+380976842538 - Ірина Трусенко</a></li>
                    </ul>
                </div>
            </div>
            <Title tag="h2" className="mt-10 mb-7 text-center text-hoverColor" >Ми відриваємося тут <TbArrowBigDownLinesFilled className='inline-block animate-bounce' /> </Title>

            <a href="https://www.google.com/maps/place/51%C2%B027'08.5%22N+33%C2%B011'20.2%22E/@51.4523459,33.1863553,17z/data=!3m1!4b1!4m4!3m3!8m2!3d51.4523459!4d33.1889302?hl=uk-UA&entry=ttu"
                target="_blank"
                rel="noopener noreferrer" className="text-sm underline text-linkColor font-medium  hover:text-hoverColor focus:text-activeLink hover:transition-all laptop:text-lg">село Алтинівка Сумська область</a>
            <GoogleMap />
        </section>
    )
}