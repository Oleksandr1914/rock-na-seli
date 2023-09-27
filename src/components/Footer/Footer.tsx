import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";
import Image from 'next/image';
import Lap from '../../../public/laps.svg';

export default function Footer(): JSX.Element {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="h-16 mobile:h-20 w-full ">
            <div className="relative h-full  flex  items-center justify-end px-5 py-3 pr-4 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 laptop:flex-row-reverse laptop:w-[1024px] leptop:px-10  laptop:justify-between  desktop:w-[1280px] desktop:px-14">

                <Image src={Lap} alt="" width={160} className="absolute bottom-0 left-0 mobile:w-[260px] laptop:left-1/2 laptop:translate-x-[-50%] laptop:w-80" />

                <div className="flex flex-col  gap-1">
                    <ul className="flex justify-center gap-7"                >
                        <li><a href="https://www.facebook.com/groups/173982049938109/user/100063204370759/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaFacebook className='w-5 h-5 tablet:w-6 tablet:h-6' /> </a></li>

                        <li><a href="https://www.instagram.com/rocknaseli/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaInstagram className='w-5 h-5 tablet:w-6 tablet:h-6' /></a></li>
                        <li><a href="https://www.youtube.com/@rock6351" target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all flex gap-2 desktop:text-2xl"
                        ><FaYoutube className='w-5 h-5 tablet:w-6 tablet:h-6' /></a></li>
                    </ul>
                    <a href="mailto:rocknaseli@ukr.net"
                        className="font-medium text-lg mobile:text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all desktop:text-2xl"
                    >rocknaseli@ukr.net</a>
                </div>
                <ul className="hidden laptop:flex laptop:flex-col laptop:gap-2">
                    <li><span>&#169; copyright {year}</span></li>
                    <li><p>Сайт розробив - <a href='https://www.linkedin.com/in/oleksandr-mochakov/'
                        target="_blank" className="underline text-linkColor  hover:text-hoverColor focus:text-activeLink hover:transition-all ">Олександр Мочаков</a>
                    </p></li>
                </ul>
            </div>
        </footer>
    )
}