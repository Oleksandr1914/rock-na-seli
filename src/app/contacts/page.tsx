import { GoogleMap } from "@/components/Maps/Maps";
import { Title } from "@/components/Title/Title";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";


export default function Contacts() {
    return (
        <section className="px-5 py-2 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:pt-5 desktop:w-[1280px] desktop:px-14">
            <Title tag="h2" className="mb-7 text-center " >Ми відриваємося тут <TbArrowBigDownLinesFilled className='inline-block animate-bounce' /> </Title>
            <GoogleMap />
        </section>
    )
}