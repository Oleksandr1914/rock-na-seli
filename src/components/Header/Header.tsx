import Image from "next/image";
import Links from "../Links/Links";
import Logo from '../../../public/logo.png';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";


export default function Header(): JSX.Element {
    return (
        <header className="relative flex flex-row justify-between px-5 py-2 items-center mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-4 laptop:w-[1024px] leptop:px-10 laptop:py-5 desktop:w-[1280px] desktop:px-14">
            <Link href='/'>
                <Image src={Logo} alt="logo" className="w-40 mobile:w-48 laptop:w-56 desktop:w-64" priority />
            </Link>
            <Sheet>

                <SheetTrigger className="laptop:hidden">
                    <RxHamburgerMenu className='h-8 w-8' />
                </SheetTrigger>
                <SheetContent className="bg-black">
                    <ul className="flex flex-col items-center gap-4 pt-20 bg-black ">
                        <li ><Links href='/' > <SheetClose > ГОЛОВНА </SheetClose></Links></li>
                        <li><Links href='/group' > <SheetClose > ДЛЯ ГУРТІВ </SheetClose></Links></li>
                        <li><Links href='/gallery' > <SheetClose > ГАЛЕРЕЯ </SheetClose></Links></li>
                        <li><Links href='/contacts' > <SheetClose > КОНТАКТИ </SheetClose></Links></li>
                    </ul>
                    <ul className="flex flex-col items-center gap-4 pt-20 bg-black "                >
                        <li><a href="https://www.facebook.com/groups/173982049938109/user/100063204370759/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        ><SheetClose >Fasebook</SheetClose></a></li>
                        <li><a href="https://www.instagram.com/rocknaseli/"
                            target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        ><SheetClose >Instagram</SheetClose></a></li>
                        <li><a href="https://www.youtube.com/@rock6351" target="_blank"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        ><SheetClose >You Tube</SheetClose></a></li>
                        <li><a href="mailto:rocknaseli@ukr.net"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        ><SheetClose >rocknaseli@ukr.net</SheetClose></a></li>
                        <li><a href="tel:+380673257403"
                            className="font-medium text-xl tracking-wider hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        ><SheetClose >+38067-325-74-03</SheetClose></a></li>
                    </ul>
                </SheetContent>
            </Sheet>
            <ul className='hidden laptop:flex laptop:flex-row laptop:gap-7 laptop:ml-auto desktop:gap-10'>
                <li ><Links href='/'  >ГОЛОВНА</Links></li>
                <li><Links href='/group'  >ДЛЯ ГУРТІВ</Links></li>
                <li><Links href='/gallery'  >ГАЛЕРЕЯ</Links></li>
                <li><Links href='/contacts'  >КОНТАКТИ</Links></li>
            </ul>
        </header >
    )
}