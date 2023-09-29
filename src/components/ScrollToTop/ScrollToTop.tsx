'use client'
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import Image from 'next/image';

import Kozak from '../../../public/kozak.png'

const ScrollToTop = (): JSX.Element => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        showTopBtn ? <div className="cursor-pointer w-14 h-14 animate-long fixed bottom-14 right-6">
            {/* <FaAngleUp
                className=" w-10 h-10"
                onClick={goToTop}
            /> */}
            <Image src={Kozak} alt='kozak' width={56} height={56} onClick={goToTop} />
            <span className="absolute font-medium top-1/2 left-1/2 translate-x-[-50%] ">Вгору</span>
        </div> : <></>
    );
};
export default ScrollToTop;