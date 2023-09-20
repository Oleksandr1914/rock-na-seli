import FormComponent from "@/components/FormCompoment/FormComponent";

export default function Group() {

    return (
        <section className="px-5 py-6 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:py-12 desktop:w-[1280px] desktop:px-14">
            <FormComponent />
        </section>
    )
}