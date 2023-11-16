export const workSlider = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.png',
                    href: 'https://itoro-rent-home.vercel.app/'
                },
                {
                    title: 'title',
                    path: '/thumb2.png',
                    href: 'https://my-recipesapp.netlify.app'
                },
                {
                    title: 'title',
                    path: '/thumb3.png',
                    href: 'https://myquizzical-app.netlify.app'
                },
                {
                    title: 'title',
                    path: '/thumb4.png',
                    href: 'https://my-memegeneratorproject.netlify.app'
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb4.png',
                    href: 'https://my-memegeneratorproject.netlify.app'
                },
                {
                    title: 'title',
                    path: '/thumb1.png',
                    href: 'https://itoro-rent-home.vercel.app/'
                },
                {
                    title: 'title',
                    path: '/thumb2.png',
                    href: 'https://my-recipesapp.netlify.app'
                },
                {
                    title: 'title',
                    path: '/thumb3.png',
                    href: 'https://myquizzical-app.netlify.app'
                },
            ],
        },
    ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required module
import { Pagination } from 'swiper/modules';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

const WorkSlider = () => {
    return (
        <Swiper 
        spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='h-[280px] sm:h-[480px]'  
        >
            {workSlider.slides.map((item, itemIndex) => {
                return (
                <SwiperSlide key={itemIndex}>
                    <div 
                        className='
                            grid
                            grid-cols-2
                            grid-rows-1
                            gap-4
                            cursor-pointer
                        '>
                        {item.images.map((image, index) => {
                            return (
                                <div 
                                    key={index}
                                    className='
                                        relative
                                        rounded-lg
                                        overflow-hidden
                                        flex
                                        items-center
                                        justify-center
                                        group
                                    '
                                >
                                    <div 
                                        className='
                                            flex
                                            items-center
                                            justify-center
                                            relative
                                            overflow-hidden
                                        '
                                    >
                                        {/* image */}
                                        <Link 
                                            href={image.href}
                                            target='_blank'
                                        >
                                            <Image
                                                src={image.path}
                                                width={500}
                                                height={300}
                                                alt=''
                                                className='
                                                    opacity-70
                                                '
                                            />
                                        </Link>
                                        {/* overlay gradient */}
                                        <div 
                                            className='
                                                absolute
                                                inset-0
                                                bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                                                group-hover:opacity-80 transition-all duration-700
                                            '
                                        ></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default WorkSlider;