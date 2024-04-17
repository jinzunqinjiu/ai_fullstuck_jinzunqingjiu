import { useEffect, useState } from "react";

export function useScroll(instance) {
    const [y, setY] = useState(instance)

    useEffect(() => {
        const handlerScroll = () => {
            setY(document.documentElement.scrollTop)
            console.log(y, '---');
        }
        window.addEventListener('scroll', handlerScroll)

        return () => {
            window.removeEventListener('scroll', handlerScroll)
        }

    }, [y])

    return [y]
}