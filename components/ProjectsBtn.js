// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsButton = () => {
    return ( 
        <div className="mx-auto xl:mx-0 -mt-5 xl:-mt-16 z-30">
            <Link 
                href={'/work'} 
                className="
                    relative
                    w-[160px]
                    h-[160px]
                    xl:w-[220px]
                    xl:h-[220px]
                    flex
                    justify-center
                    items-center
                    bg-circleStar
                    bg-cover
                    bg-center
                    bg-no-repeat
                    group
                "
            >
                <Image 
                    src={'/rounded-text.png'} 
                    width={141} 
                    height={148} 
                    alt="" 
                    className="
                        animate-spin-slow
                        w-full 
                        h-full 
                        max-w-[125px] 
                        max-h-[132px]
                        xl:max-w-[171px] 
                        xl:max-h-[178px]
                    "
                />
                <HiArrowRight 
                    className="
                        absolute
                        text-4xl
                        group-hover:translate-x-2
                        transition-all
                        duration-300
                    " 
                />
            </Link>
        </div>
     );
}
 
export default ProjectsButton;