// next image
import Image from 'next/image';

const TopLeftImg = () => {
    return ( 
        <div 
            className='
                absolute 
                left-0 
                top-0 
                mix-blend-color-dodge 
                z-10
                w-[140px] 
                xl:w-[400px] 
                opacity-25'>
            <Image 
                src="/Top-Left.jpg" 
                width={150} 
                height={150}
                alt=''
            />
        </div>
     );
}
 
export default TopLeftImg; 