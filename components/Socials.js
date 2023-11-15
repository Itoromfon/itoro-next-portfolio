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
                href={''}
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
                href={''}
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
                href={''}
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
                href={''}
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
                href={''}
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