import React, { useState } from 'react'

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiGit,
    SiNodedotjs,
    SiExpress,
} from "react-icons/si";


//  data
export const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development Skills',
                icons: [
                    <FaHtml5 key={1} />,
                    <FaCss3 key={2} />,
                    <FaJs key={3} />,
                    <FaReact key={4} />,
                    <SiNextdotjs key={5} />,
                    <SiTypescript key={6} />,
                ],
            },
            {
                title: 'Skills',
                icons: [<SiMongodb key={1} />, <SiGit key={2} />, <SiNodedotjs key={3} />, <SiExpress key={4} />, <SiTailwindcss key={5} />, <SiFramer key={6} />],
            },
        ],
    },
    {
        title: 'awards',
        info:
            [
                {
                    title: 'Aptech Award - Honoree',
                    stage: '2015 - 2016',
                },
                {
                    title: 'Exalt Applications Programmer of the year',
                    stage: '2021 - 2022',
                },
                {
                    title: 'Vendi Nigeria Humatarian Award',
                    stage: '2017 - 2018',
                },
            ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Chief Software Architect - Airvolt DOOH',
                stage: '2021 - 2022',
            },
            {
                title: 'Senior Frontend Developer - Exalt Applications',
                stage: '2021 - 2022',
            },
            {
                title: 'Full Stack Developer - Muqo-Music Start-up',
                stage: '2020 - 2021',
            },
            {
                title: 'Frontend Developer - Vendi Nigerian',
                stage: '2017 - 2020',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - Aptech Computer College',
                stage: '2015',
            },
            {
                title: 'Computer Science Degree - Federal University Oye-Ekiti',
                stage: '2022',
            },
            {
                title: 'Certified Frontend Engineer - Scrimba Frontend Career Path',
                stage: '2022',
            },
        ],
    },
];

// components
import Circles from '@/components/Circles';
import Avatar from '@/components/Avatar';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {

    const [index, setIndex] = useState(0);
    console.log(index)

    return <div
        className='
                    h-full
                    bg-primary/30
                    py-32
                    text-center
                    xl:text-left
            '>
        <Circles />
        <div
            className='
                container 
                mx-auto
                h-full
                flex
                flex-col
                items-center
                xl:flex-row
                gap-x-6
                '
        >
            <div
                className='
                    flex-1 
                    flex 
                    flex-col 
                    justify-center
                    mb-4
                    xl:mb-0
                '
            >
                <motion.h2
                    variants={fadeIn('right', 0.2)}
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
                        leading-6
                        md:leading-6
                        xl:leading-10
                        mt-3
                        sm:mt-16
                        md:mt-16
                        lg:mt-16
                        xl:mt-0 
                    '
                >
                    My <span className='text-accent'>journey</span> as a <span 
                        className='
                            text-[16px]
                            sm:text-[18px]
                            md:text-[20px]
                            lg:text-[22px]
                            xl:text-[28px]
                        '
                    >
                        Software Engineer.
                    </span>
                </motion.h2>
                <motion.p
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='
                        max-w-[500px]
                        mx-auto
                        xl:mx-0
                        mb-3
                        xl:mb-12
                        px-2
                        xl:px-0
                        font-[sora]
                        text-[16px]
                        sm:text-[16px]
                        md:text-[19px]
                        lg:text-[20px]
                        xl:text-[21px]
                    '
                >
                    I am a Professional Software Engineer with over
                    six years of experience in building responsive
                    and well structure web applications for agencies,
                    companies, startups and organizations.
                </motion.p>
                {/* counters */}
                <motion.div
                    variants={fadeIn('right', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='
                        hidden
                        xl:flex
                        xl:max-w-xl-left
                        xl:max-w-none
                        mx-auto
                        xl:mx-0
                        mb-8
                    '>
                    <div
                        className='
                            flex 
                            flex-1 
                            xl:gap-x-6
                        '
                    >
                        {/* experience */}
                        <div
                            className='
                                relative
                                flex-1
                                after:w-[1px]
                                after:h-full
                                after:bg-white/10
                                after:absolute
                                after:top-0
                                after:right-0
                            '>
                            <div
                                className='
                                    text-2xl
                                    xl:text-4xl
                                    font-extrabold
                                    text-accent
                                '
                            >
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={5}
                                /> +
                            </div>
                            <div
                                className='
                                    text-xs
                                    uppercase
                                    tracking-[1px]
                                    leading-[1.4]
                                    max-w-[100px]
                                '>
                                Years of experience
                            </div>
                        </div>
                        {/* clients */}
                        <div
                            className='
                                relative
                                flex-1
                                after:w-[1px]
                                after:h-full
                                after:bg-white/10
                                after:absolute
                                after:top-0
                                after:right-0
                            '>
                            <div
                                className='
                                    text-2xl
                                    xl:text-4xl
                                    font-extrabold
                                    text-accent
                                '
                            >
                                <CountUp
                                    start={0}
                                    end={50}
                                    duration={5}
                                /> +
                            </div>
                            <div
                                className='
                                    text-xs
                                    uppercase
                                    tracking-[1px]
                                    leading-[1.4]
                                    max-w-[100px]
                                '>
                                Satisfied client
                            </div>
                        </div>
                        {/* projects */}
                        <div
                            className='
                                relative
                                flex-1
                                after:w-[1px]
                                after:h-full
                                after:bg-white/10
                                after:absolute
                                after:top-0
                                after:right-0
                            '>
                            <div
                                className='
                                    text-2xl
                                    xl:text-4xl
                                    font-extrabold
                                    text-accent
                                '
                            >
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={5}
                                /> +
                            </div>
                            <div
                                className='
                                    text-xs
                                    uppercase
                                    tracking-[1px]
                                    leading-[1.4]
                                    max-w-[100px]
                                '>
                                Finished Projects
                            </div>
                        </div>
                        {/* awards */}
                        <div
                            className='
                                relative
                                flex-1
                            '>
                            <div
                                className='
                                    text-2xl
                                    xl:text-4xl
                                    font-extrabold
                                    text-accent
                                '
                            >
                                <CountUp
                                    start={0}
                                    end={4}
                                    duration={5}
                                /> +
                            </div>
                            <div
                                className='
                                    text-xs
                                    uppercase
                                    tracking-[1px]
                                    leading-[1.4]
                                    max-w-[100px]
                                '>
                                Winning awards
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* info */}
            <motion.div
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='
                    flex 
                    flex-col 
                    w-full 
                    xl:max-w-[48%]
                    h-[480px]
                '
            >
                <div
                    className='
                        flex
                        gap-x-4
                        xl:gap-x-8
                        mx-auto
                        xl:mx-0
                        mb-4
                        font-[sora]
                '>
                    {aboutData.map((item, itemIndex) => {
                        return (
                            <div
                                key={itemIndex}
                                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                                    }
                                    cursor-pointer
                                    capitalize
                                    xl:text-lg
                                    text-[16px]
                                    z-30
                                    relative
                                    after:w-8
                                    after:h-[2px]
                                    after:bg-accent 
                                    after:absolute
                                    after:-bottom-1
                                    after:left-0
                                    sm:mx-2
                                    xl:mx-0
                                `}
                                onClick={() => setIndex(itemIndex)}
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div
                    className='
                        py-2
                        xl:py-6
                        flex
                        flex-col
                        gap-y-2
                        xl:gap-y-4
                        items-center
                        xl:items-start
                        font-[sora] 
                        xl:text-lg
                        text-[16px]
                        xl:mb-0
                        mb-36
                    '>
                    {aboutData[index].info.map((item, itemIndex) => {
                        return (
                            <div
                                key={itemIndex}
                                className='
                                    flex-1
                                    flex
                                    flex-col
                                    md:flex-row
                                    max-w-max
                                    gap-x-3
                                    items-center
                                    text-white/60
                                '
                            >
                                {/*title */}
                                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                <div className='hidden md:flex'>-</div>
                                <div>{item.stage}</div>
                                <div className='flex xl:gap-x-4 gap-x-6'>
                                
                                    {/* icon */}
                                    {item.icons?.map((icon, itemIndex) => {
                                        return (
                                            <div
                                                key={itemIndex}
                                                className='
                                                    xl:text-xl
                                                    text-white
                                                    xl:mx-0
                                                    mx-2
                                                '
                                            >
                                                {icon}
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    </div>;
};

export default About;