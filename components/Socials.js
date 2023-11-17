// links
import Link from "next/link";

// icons
import {
    RiTwitterLine, 
    RiGithubLine,
    RiLinkedinLine, 
    RiInstagramLine,
    RiFacebookLine,
    
} from 'react-icons/ri'


const Social = () => {
    return ( 
        <div 
            className="
                flex
                items-center
                text-[16px]
                sm:text-lg
                md:text-lg
                lg:text-lg
                xl:text-xl
            ">
            <Link 
                target="_blank"
                href={'https://twitter.com/praiztech'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-4
                 "
            >
                <RiTwitterLine />
            </Link>
            <Link
                target="_blank"
                href={'https://github.com/Itoromfon?tab=repositories'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-4
                "
            >
                <RiGithubLine />
            </Link>
            <Link
                target="_blank"
                href={'https://www.linkedin.com/in/itoro-mfon-emmanuel-3867991aa/'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-4
                "
            >
                <RiLinkedinLine />
            </Link>
            <Link
                target="_blank"
                href={'https://www.instagram.com/praiztech/'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-4
                "
            >
                <RiInstagramLine />
            </Link>
            <Link
                target="_blank"
                href={'https://web.facebook.com/praise.mfon.73/'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-4
                "
            >
                <RiFacebookLine />
            </Link>
        </div>
     );
}
 
export default Social;