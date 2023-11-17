// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div
      className='
        bg-primary/60 
        h-full
      '
    >
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r 
      from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center
        xl:pt-40 xl:text-left h-full container mx-auto'>
          {/*title */}
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='
              h2 
              font-[sora]
              text-[16px]
              sm:text-[18px]
              md:text-[20px]
              lg:text-[22px]
              xl:text-[28px]
              mt-36
              sm:mt-36
              md:mt-28
              lg:mt-16
              xl:mt-0 
            '
          >
            Enthusiastic Problem Solver and<br />
            <span
              className='
                text-accent 
                text-[16px]
                sm:text-[17px]
                md:text-[20px]
                lg:text-[22px]
                xl:text-[27px]
              '
            >
              a Professional Software Engineer
            </span>
          </motion.h2>
          {/* subtitle */}
          <div className='xl:flex'>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='
              max-w-sm 
              mx-auto 
              xl:max-w-xl 
              xl:mx-0 
              mb-6
              text-[16px]
              sm:text-[16px]
              md:text-[19px]
              lg:text-[20px]
              xl:text-[21px]
              xl:mr-40
              xl:mb-16
              font-[sora]
            '>
              My name is Itoro Mfon Emmanuel, I am a Professional Software Engineer
              with over six years of experience in building responsive
              and well structured web applications for various companies
              and organizations.
            </motion.p>
            {/* btn */}
            {/* <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='
              hidden 
              xl:flex
            '
            >
              <ProjectsBtn />
            </motion.div> */}
          </div>
        </div>
      </div>
      {/* image */}
      <div className='xl:w-[1050px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0
        opacity-50'></div>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
}

export default Home;