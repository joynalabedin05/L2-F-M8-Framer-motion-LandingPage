// import { useScroll, motion, useTransform } from "framer-motion";
// import { useRef } from "react";
import useScrollGrowHook from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";



const BatteryReplacement = () => {
    // const componentRef = useRef<HTMLDivElement>(null);
    // const {scrollYProgress} = useScroll({
    //     target: componentRef,
    //     offset: ['0 1', '1.2 1']
    // });

    // const scaleValues = useTransform(scrollYProgress, [0 , 1], [.5 ,1])
    // const opacityValues = useTransform(scrollYProgress, [0 , 1], [.1 ,1])
    // const xValues = useTransform(scrollYProgress, [0 , 1], [-1000 ,1])

    const {style, componentRef} = useScrollGrowHook();

    return (
        <motion.div ref={componentRef} 
        // style={{
            // scale: scaleValues,
            // opacity: opacityValues,
            // x: xValues,}} 
            style={style}
        className="bg-red-500 h-[500px] rounded col-span-12">
            <h1>battery</h1>
        </motion.div>
    );
};

export default BatteryReplacement;