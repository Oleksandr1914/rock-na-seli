
import Links from "@/components/Links/Links";
import { Title } from "@/components/Title/Title";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { PTag } from "@/components/PTag/PTag";
import Image from 'next/image';
import Kozak from '../../../../public/kozak-title.png';
import Stage from '../../../../public/rock-stage.jpg';

export default function Info() {

    return (
        <section className="flex flex-col px-5 py-6 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:py-8 desktop:w-[1280px] desktop:px-14">
            <Links href="/group" className="flex items-center text-linkColor underline">Повернутися до форми <TbArrowBigLeftLinesFilled className='inline-block animate-bounce-right' /></Links>
            <div className="flex flex-col items-center mt-6 gap-4">
                <div>
                    <Title tag="h2" className="mx-auto mb-4 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px]  desktop:w-[640px]">Положення фестивалю живої музики «Rock на селі»</Title>
                    <PTag className="text-justify">Фестиваль «Рок на селі» проходить у селі Алтинівка Сумської області Конотопського району з 2003 року. Метою проєкту є створення єдиного творчого простору для розвитку талановитих молодих колективів.</PTag>
                </div >
                <Image src={Kozak} alt='' width={240} height={240} />
            </div>
            <div className="pt-6 flex flex-col items-center gap-4">
                <div>
                    <Title tag="h3" className="mx-auto mb-2 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px]  desktop:w-[640px]">На вас чекають:</Title>
                    <ul className="list-disc pl-5">
                        <li><PTag className="text-justify">Велика сцена, якісний звук та професійне
                            освітлення.</PTag></li>
                        <li><PTag className="text-justify">Безкоштовні професійні фото та
                            відеозаписи виступів учасників фестивалю.</PTag></li>
                        <li><PTag className="text-justify">Смачне безкоштовне харчування для
                            учасників заходу протягом двох
                            фестивальних днів.</PTag></li>
                        <li><PTag className="text-justify">Наметове містечко з усіма зручностями на
                            територіїфестивалю, де можна розміститися.</PTag></li>
                        <li><PTag className="text-justify">Найкомпетентніша та найдрайвовіша публіка в
                            Україні!</PTag></li>
                    </ul>
                </div >
                <Image src={Stage} alt='stage and teams' height={320} />
            </div>
            <div className="pt-6 flex flex-col items-center">
                <div>
                    <Title tag="h3" className="mx-auto mb-2 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px]  desktop:w-[640px]">Умови участі:</Title>
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
            </div>
            <div className="pt-6 flex flex-col items-center">
                <div>
                    <Title tag="h3" className="mx-auto mb-2 w-[268px] mobile:w-[356px] text-center   tablet:w-[380px]  desktop:w-[640px]">Як подати заявку?</Title>
                    <PTag className="text-justify">Відбір гуртів відбувається на конкурсній основі
                        за відеозаписами. Для участі у фестивалі живої музики «Rock на селі» необхідно заповнити <Links href="/group" className=" text-linkColor underline">форму на сайті.</Links> У разі виникнення додаткових запитань з приводу участі
                        можна звертатися за номером телефону: <a href="tel:+380673257403"
                            className=" text-linkColor underline hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        >+38067-325-74-03</a> (Софія)
                        чи за електронною адресою: <a href="mailto:rocknaseli@ukr.net"
                            className=" text-linkColor underline hover:text-hoverColor focus:text-activeLink hover:transition-all"
                        >rocknaseli@ukr.net</a></PTag>

                </div>
            </div>
        </section>
    )
}