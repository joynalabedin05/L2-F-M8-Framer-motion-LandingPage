import useScrollGrowHook from '@/hooks/ScrollGrowHook';
import {motion} from 'framer-motion'

const DataRecovery = () => {
    const {style, componentRef}= useScrollGrowHook();
    return (
        <motion.div ref={componentRef} style={style} className="bg-red-500 h-[500px] rounded col-span-6 md:col-span-7">
           
        </motion.div>
    );
};

export default DataRecovery;