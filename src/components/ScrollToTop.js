import { IconButton } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollBtn = useRef()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isVisible) {
            gsap.to(scrollBtn.current, {
                duration: 0.5,
                opacity: 1,
                zIndex: 100,
            });
        } else {
            gsap.to(scrollBtn.current, {
                duration: 0.5,
                opacity: 0,
                zIndex: -1
            })
        }
    }, [isVisible])

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        scrollBtn.current.blur();
    }


    return (
        <IconButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z" fill="white" fill-opacity="0.01" stroke="#777777" />
            <path d="M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z" fill="#777777" />
        </svg>}
        ref={scrollBtn}
        onClick={handleClick}
        zIndex="1"
        opacity="0"
        ml="90%"
        colorScheme="#fff"/>
    )
}

export default ScrollToTop