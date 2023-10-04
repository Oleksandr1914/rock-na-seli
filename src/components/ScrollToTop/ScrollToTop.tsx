'use client'
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

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
        showTopBtn ? <div className=" fixed bottom-16 right-6 cursor-pointer flex items-center justify-center rounded-full animate-long text-linkColor hover:text-hoverColor hover:transition-all"
            onClick={goToTop}
        >
            <FaAngleUp
                className="w-12 h-12"
            />
        </div> : <></>
    );
};
export default ScrollToTop;