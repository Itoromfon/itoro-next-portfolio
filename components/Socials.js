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
                text-lg
            ">
            <Link 
                target="_blank"
                href={'https://twitter.com/praiztech'}
                className="
                    hover:text-accent
                    transition-all
                    duration-300
                    mx-5
                    xl:mx-3
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
                    mx-5
                    xl:mx-3
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
                    mx-5
                    xl:mx-37
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
                    mx-5
                    xl:mx-3
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
                    mx-5
                    xl:mx-3
                "
            >
                <RiFacebookLine />
            </Link>
        </div>
     );
}
 
export default Social;