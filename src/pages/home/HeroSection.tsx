import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import pc1 from '@/assets/pc1.jpg';
import {motion} from 'framer-motion';

const intro = {
    hidden: {opacity: 0},
    visible: {opacity: 1, 
        transition: {
        duration: .5,
        staggerChildren: .5,
        delayChildren: 1
    }},

}
const introChildren = {
    hidden: {opacity: 0, y: -500},
    visible: {opacity: 1, y: 0,
        transition: {
        duration: .7,
        type: 'spring',
        bounce: .6
    }},

}

const laptop = {
    initial : {y: 0, scale: 4},
    animate: {
        y: 45,
        rotate: -30,
        scale: 1,
        transition: {
            duration: 2,
            y: {
            repeat: Infinity,
            duration: 2,
            repeatType:"reverse" ,
            ease: 'easeInOut'
        } }      
    },
}


const HeroSection = () => {
    return (
    <div className="overflow-hidden pt-20">
        <Container className="grid h-screen grid-cols-1 lg:grid-cols-2 place-content-center gap-10 mt-20">
            <motion.div className=""
            variants={intro}
            initial='hidden'
            animate='visible'
            >
                <motion.h1 className="text-5xl lg:text-8xl text-nowrap"
                variants={introChildren}
                >
                    <span className="text-gray">Don't Worry,</span>
                    <br />
                    <span className="">We will fix it.</span>
                </motion.h1>
                <motion.p className="mt-10 mb-5 w-3/4"
                variants={introChildren}
                >  Our service center <span>iRepair</span> is able to fix all types of problems regarding your Laptop and Notebook. Our employees are highly  notebook. There are numerous types of hardware supports that we specialize on. We able to fix any power disturbances or charging problems. </motion.p>
                <motion.div 
                variants={introChildren}
                >
                    <Button>Book a service</Button>
                </motion.div>
            </motion.div>
            <motion.div className=" ml-5 object-contain mt-10"

             variants = {laptop}

             initial='initial'
             animate='animate'
            >
                <img className="rounded-lg h-[95%] w-3/4 lg:w-full mx-auto " src={pc1} alt="" />
            </motion.div>
        </Container>
        </div>
    );
};

export default HeroSection;