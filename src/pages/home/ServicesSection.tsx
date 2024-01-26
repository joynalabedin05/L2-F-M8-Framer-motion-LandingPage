import Container from "@/components/Container";
import BatteryReplacement from "@/components/ui/serviceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ui/serviceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ui/serviceTiles/DataRecovery";


const ServicesSection = () => {
    return (
        <Container className="MY-40 ">
            <div className="text-center">
            <h1 className="">Services that we Provide</h1>
            <p className="mt-5 max-w-[500px] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus eos quae voluptatum. Officiis eveniet </p>
            </div>
            <div className="grid grid-cols-12 mt-20 gap-5">
               <BatteryReplacement></BatteryReplacement>
               <ChipsetReplacement></ChipsetReplacement>
                <DataRecovery></DataRecovery>
                <div className="bg-red-500 h-[500px] rounded col-span-12"></div>
                <div className="bg-red-500 h-[500px] rounded col-span-12 md:col-span-4"></div>
                <div className="bg-red-500 h-[500px] rounded col-span-12 md:col-span-4"></div>
                <div className="bg-red-500 h-[500px] rounded col-span-12 md:col-span-4"></div>
               
            </div>
           
        </Container>
    );
};

export default ServicesSection;