// next image
import Image from "next/image";

// next link
import Link from "next/link";
 
// components
import Socials from '../components/Socials';   

const Header = () => {
    return ( 
        <header 
            className="
            absolute
            z-30
            w-full
            flex
            items-center
            px-16
            xl:px-0
            xl:h-[90px]
        ">
            <div className="container mx-auto">
                <div 
                    className="
                        flex 
                        flex-col
                        lg:flex-row
                        justify-between
                        items-center
                        gap-y-2
                        lg:gap-y-6
                        py-8
                    ">
                    {/* logo */}
                    <Link href={'/'}>  
                        <h2 
                            className="
                                text-[24px]
                                md:[38px]
                                mb-5
                                xl:mb-0
                            "
                        >
                            <span 
                            className="
                                font-bold
                            ">
                                    Itoro </span>Mfon
                        </h2>
                    </Link>
                    {/* socials */}
                    <Socials />
                </div>
            </div>
        </header>
     );
}
 
export default Header;