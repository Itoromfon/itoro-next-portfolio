// import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//icons
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxArrowTopRight
} from 'react-icons/rx';

// import required module
import {FreeMode, Pagination,} from 'swiper/modules'

// service data
export const serviceData = [
    {
        icon: <RxCrop />,
        title: 'Branding',
        description: 'I provide branding services for companies.',
    },
    {
        icon: <RxPencil2 />,
        title: 'Design',
        description: 'I design products for different companies and startups.',
    },
    {
        icon: <RxDesktop />,
        title: 'Development',
        description: 'I development both web and mobile applications.',
    },
    {
        icon: <RxRocket />,
        title: 'SEO',
        description: 'I provide SEO services for various companies and agencies.',
    },
]


const ServicesSlider = () => {
    return ( 
        <Swiper breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15
            },
        }}
        freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[340px]'
        >
            {serviceData.map((item, itemIndex) => {
                return (
                    <SwiperSlide key={itemIndex }>
                        <div 
                            className='
                                bg-[rgba(65,47,123,0.15)]
                                h-max
                                rounded-lg
                                px-6
                                xl:py-8
                                py-6
                                flex
                                sm:flex-col
                                gap-x-6
                                sm:gap-x-0
                                group
                                cursor-pointer
                                hover:bg-[rgba(89,65,169,0.15)]
                                transition-all
                                duration-300
                            '>
                            {/* icon */}
                            <div 
                                className='
                                    xl:text-4xl
                                    md:text-2xl
                                    text-xl
                                    text-accent
                                    xl:mb-4
                                    mb-2
                                '>
                                {item.icon}
                            </div>
                            {/* title & desc */}
                            <div className='xl:mb-8 mb-3'>
                                <div className='mb-2 text-lg font-[sora] leading-6 xl:leading-8 text-[16px] md:text-[19px] xl:text-[21px]'>{item.title}</div>
                                <p className='max-w-[350px] font-[sora] leading-6 xl:leading-8 text-[16px] md:text-[19px] xl:text-[21px]'>{item.description}</p>
                            </div>
                            {/* arrow */}
                            <div className='text-3xl'>
                                <RxArrowTopRight 
                                    className='
                                        group-hover:rotate-45
                                        group-hover:text-accent
                                        transition-all
                                        duration-300
                                    ' 
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
     );
}
 
export default ServicesSlider;