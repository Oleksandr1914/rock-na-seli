import FormComponent from "@/components/FormCompoment/FormComponent";
import Links from "@/components/Links/Links";
import { Title } from "@/components/Title/Title";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";


export default function Group() {

    return (
        <section className="flex flex-col px-5 py-6 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:py-8 desktop:w-[1280px] desktop:px-14">
            <Links href="/group/info" className="flex ml-auto items-center text-linkColor underline"><TbArrowBigRightLinesFilled className='inline-block animate-bounce-left' /> Положення фестивалю</Links>
            <Title tag="h2" size="s" className="mx-auto my-8 w-[268px] mobile:w-[356px] text-center tablet:my-10  tablet:w-[380px]  desktop:w-[640px]">{'Форма заявки для участі у фестивалі «Rock на селі»'}</Title>
            <FormComponent />
        </section>
    )
}