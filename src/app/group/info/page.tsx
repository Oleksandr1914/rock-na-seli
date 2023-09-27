
import Links from "@/components/Links/Links";
import { Title } from "@/components/Title/Title";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { PTag } from "@/components/PTag/PTag";
import Image from 'next/image';
import Kozak from '../../../../public/kozak-title.png';
import Stage from '../../../../public/rock-stage.jpg';

export default function Info() {

    return (
        <section className="flex flex-col px-5 py-6 mobile:pb-8 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:pb-20 laptop:w-[1024px] leptop:px-10 laptop:py-8 desktop:w-[1280px] desktop:px-14">
            <Links href="/group" className="flex items-center text-linkColor underline">Повернутися до форми <TbArrowBigLeftLinesFilled className='inline-block animate-bounce-right' /></Links>
            <div className="flex flex-col items-center mt-6 gap-4 tablet:flex-row-reverse tablet:gap-8 tablet:mt-20 laptop:gap-[116px] desktop:pl-8 desktop:gap-36">
                <div>
                    <Title tag="h2" className="mx-auto mb-4 w-[268px] mobile:w-[356px] text-center tablet:w-[300px] desktop:w-[540px]">Положення фестивалю живої музики «Rock на селі»</Title>
                    <PTag className="text-justify">Фестиваль «Рок на селі» проходить у селі Алтинівка Сумської області Конотопського району з 2003 року. Метою проєкту є створення єдиного творчого простору для розвитку талановитих молодих колективів.</PTag>
                </div >
                <Image src={Kozak} alt='емблема фестивалю' width={240} height={240} className="laptop:w-[300px] laptop:h-[300px] desktop:w-[340px] desktop:h-[340px]" />
            </div>
            <div className="pt-6 flex flex-col items-center gap-4 laptop:flex-row laptop:pt-12 laptop:gap-14 desktop:pt-10">
                <div>
                    <Title tag="h3" className="mx-auto mb-2 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px] desktop:mt-4">На вас чекають:</Title>
                    <ul className="list-disc pl-5">
                        <li><PTag className="text-justify">Велика сцена, якісний звук та професійне
                            освітлення.</PTag></li>
                        <li><PTag className="text-justify">Безкоштовні професійні фото та
                            відеозаписи виступів учасників фестивалю.</PTag></li>
                        <li><PTag className="text-justify">Смачне безкоштовне харчування для
                            учасників заходу протягом двох
                            фестивальних днів.</PTag></li>
                        <li><PTag className="text-justify">Наметове містечко з усіма зручностями на
                            території фестивалю, де можна розміститися.</PTag></li>
                        <li><PTag className="text-justify">Найкомпетентніша та найдрайвовіша публіка в
                            Україні!</PTag></li>
                    </ul>
                </div >
                <Image src={Stage} alt='сцена та гурти фестивалю' height={320} className="tablet:h-[280px]" />
            </div>
            <div className="pt-6 flex flex-col items-center laptop:flex-row-reverse laptop:gap-16 laptop:pt-10 desktop:pl-8 desktop:gap-28">
                <div >
                    <Title tag="h3" className="mx-auto mb-2 text-center   ">Умови участі:</Title>
                    <ul className="list-disc pl-5">
                        <li><PTag className="text-justify">Участь у фестивалі безкоштовна. Транспортні
                            витрати за рахунок відряджаючоїорганізації.</PTag></li>
                        <li><PTag className="text-justify">Тривалість виступу окремого гурту – 20 хвилин (без
                            врахування часу на підключення).</PTag></li>
                        <li><PTag className="text-justify">Обов‘язкова наявність у представленому репертуарі
                            авторських пісень. Вітається україномовна програма.</PTag></li>
                        <li><PTag className="text-justify">Склад гурту має бути повноцінним (не допускається компенсація відсутності одного з
                            інструментів прописаним треком). Мінімальна кількість записаних playbacks!</PTag></li>
                    </ul>
                </div>
                <div className="hidden pt-14 px-14 w-[370px] h-[370px] bg-roundInfoFirst rounded-full laptop:flex laptop:flex-col laptop:items-center ">
                    <Title tag="h3" className="desktop:text-3xl">ДЕ?</Title>
                    <PTag className="text-justify w-[280px] mt-4 desktop:text-xl">На футбольному полі у
                        центрі села Алтинівка, що у
                        Конотопському районі
                        Сумськоїобласті. Ось тут
                        детальне розташування на
                        google-карті: <a href="https://www.google.com/maps/place/51%C2%B027'08.5%22N+33%C2%B011'20.2%22E/@51.4523459,33.1863553,17z/data=!3m1!4b1!4m4!3m3!8m2!3d51.4523459!4d33.1889302?hl=uk-UA&entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer" className="text-sm underline text-linkColor font-medium  hover:text-hoverColor focus:text-activeLink hover:transition-all laptop:text-lg">«Rock на селі»</a>
                    </PTag>
                </div>
            </div>
            <div className="pt-6 flex flex-col items-center laptop:flex-row laptop:gap-16 laptop:pt-10 desktop:gap-20 desktop:pr-8">
                <div>
                    <Title tag="h3" className="mx-auto mb-2 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px]  desktop:w-[640px]">Як подати заявку?</Title>
                    <PTag className="text-justify ">Відбір гуртів відбувається на конкурсній основі
                        за відеозаписами. Для участі у фестивалі живої музики «Rock на селі» необхідно заповнити <Links href="/group" className=" text-linkColor underline">форму на сайті.</Links> У разі виникнення додаткових запитань з приводу участі
                        можна звертатися за номером телефону: <a href="tel:+380673257403"
                            className=" text-linkColor underline hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        >+38067-325-74-03</a> (Софія)
                        чи за електронною адресою: <a href="mailto:rocknaseli@ukr.net"
                            className=" text-linkColor underline hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        >rocknaseli@ukr.net</a></PTag>

                </div>
                <div className="hidden pt-11 px-14 w-[370px] h-[370px] bg-roundInfosecond rounded-full laptop:flex laptop:flex-col laptop:items-center ">
                    <Title tag="h3" className="desktop:text-3xl">ВАЖЛИВО!</Title>
                    <PTag className="text-justify w-[290px] mt-4 desktop:text-xl">Ми є некомерційним
                        проєктом. Діяльність наша
                        полягає в організації та
                        проведенні фестивалю,
                        створенні комфортної
                        атмосфери для комунікації та
                        співпраці між його
                        учасниками без мети
                        отримання доходу.</PTag>
                </div>
            </div>
        </section>
    )
}