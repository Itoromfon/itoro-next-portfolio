// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
} from 'react-icons/rx';

// components
import ServicesSlider from '@/components/ServiceSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

const Services = () => {
    return ( 
        <div 
            className='
                h-full 
                bg-primary/30 
                py-36 
                flex 
                items-center
            '>
            <Circles />
            <div className='container mx-auto'>
                <div 
                    className='
                        flex
                        flex-col
                        xl:flex-row
                        gap-x-8
                    '>
                    {/* text */}
                    <div 
                        className='
                            text-center
                            flex
                            xl:w-[30vw]
                            flex-col
                            xl:text-left
                            mb-4
                            xl:mb-0
                        '>
                        <motion.h2 
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='
                                h2 
                                font-[sora]
                                text-[16px]
                                sm:text-[18px]
                                md:text-[20px]
                                lg:text-[22px]
                                xl:text-[28px]
                                mt-56
                                sm:mt-60
                                md:mt-28
                                lg:mt-16
                                xl:mt-0 
                            '
                        >
                        My Services<span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p 
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='
                                mb-4 
                                font-[sora] 
                                max-w-[400px] 
                                mx-auto 
                                xl:mx-0
                                xl:leading-8
                                text-[16px] 
                                md:text-[19px]
                                xl:text-[21px]
                                '
                            >
                            I am a Professional Software Engineer with both Frontend
                            and Backend experience in building a fast and interactive 
                            user interface for both web and mobile application using 
                            different libraries and frameworks.
                        </motion.p>
                    </div>

                    {/* slider */}
                    <motion.div 
                        variants={fadeIn('down', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className='
                            w-full 
                            xl:max-w-[65%]
                            mr-5
                            '
                        > 
                        <ServicesSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
     );
}
 
export default Services;