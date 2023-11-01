// next image
import Image from "next/image";

const Avatar = () => {
    return ( 
        <div 
            className="
                hidden 
                xl:flex
                xl:max-w-none
            ">
                <Image 
                    src={'/itoro-image.jpg'} 
                    width={250}
                    height={250}
                    alt=""
                    className="
                        translate-z-0
                        rounded-full
                        z-10
                        opacity-50
                    "
                />
            </div>
     );
}
 
export default Avatar;