import { useScroll,useTransform } from "framer-motion";
import { useRef } from "react";
const useScrollGrowHook = () => {

    const componentRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: componentRef,
        offset: ['0 1', '1.2 1']
    });

    const scaleValues = useTransform(scrollYProgress, [0 , 1], [.5 ,1])
    const opacityValues = useTransform(scrollYProgress, [0 , 1], [.1 ,1])

    const style = {
        scale: scaleValues,
        opacity: opacityValues,
        // x: xValues,
        }
    return {
        componentRef,
        style,
    }
};

export default useScrollGrowHook;