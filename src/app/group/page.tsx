import FormComponent from "@/components/FormCompoment/FormComponent";
import { Title } from "@/components/Title/Title";

export default function Group() {

    return (
        <section className="px-5 py-6 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:py-8 desktop:w-[1280px] desktop:px-14">
            <Title tag="h2" size="s" className="mx-auto mb-8 w-[268px] mobile:w-[356px]  text-center tablet:mb-10  tablet:w-[380px] laptop:mb-10 desktop:mb-10 desktop:w-[640px]">{'Форма заявки для участі у фестивалі "Rock на селі"'}</Title>
            <FormComponent />
        </section>
    )
}