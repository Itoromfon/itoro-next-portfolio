// next image
import Image from 'next/image';

// components
import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants'

const Home = () => {
  return ( 
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r 
      from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center
        pt-32 xl:pt-40 xl:text-left h-full container mx-auto'>
          {/*title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 font-[sora]
          '>
            Enthusiastic Problem Solver<br />
            <span className='text-accent'> Eager to add value to the team.</span>
          </motion.h1>
          {/* subtitle */}
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
              mb-10
              text-lg
              xl:text-xl
              xl:mb-16
              font-[sora]
            '>
            My name is Itoro Mfon Emmanuel, I am Software Engineer
            with over four years of experience My Skills includes: 
            React.JS, Redux, Next.JS, HTML5,  CSS3, Javascript, ES6, Git, 
            Styled-Component, Tailwind CSS, Bootstrap, Typescript, 
            Nodejs, Express, Mongo DB
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
         </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div 
          className='
            bg-none 
            xl:bg-explosion 
            xl:bg-cover  
            xl:bg-right
            xl:bg-no-repeat
            w-full
            h-full
            absolute
            mix-blend-color-dodge
            translate-z-0
          '>  
        </div>
        {/* particles */}
        <div>Particles</div>
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='
            w-full
            h-full
            max-w-[250px]
            max-h-[250px]
            xl:mt-[12%]
            absolute
            xl:right-[10%]
          '>
          <Avatar />
        </motion.div>
      </div>
    </div>  
  );
}
 
export default Home;