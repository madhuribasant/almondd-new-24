import { TestimonialType } from '@/types';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';


const ShowMoreComponent = ({ children }: { children: ReactNode }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <>


            <p className='text-white text-center'>
                <q>

                    {showMore ? children : children?.toString().substring(0, 200)}
                </q>
            </p>

            <span className="text-white cursor-pointer" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Read more' : 'Read less'}
            </span>
        </>

    )

}


const Carousel = ({ data }: { data: TestimonialType[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className='f-pop font-medium' style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentIndex * 100}%)`, width: "300vw" }}>
                {data.map((item, index) => (
                    <div key={index} className='min-w-full h-[300px] p-3 text-lightpink'>
                        <div className='flex flex-col items-center  w-96  text-black '>
                            <Image src={item.imageUrl} alt={item.name} width={50} height={50} />
                            <h1 className='text-lightpink'>{item.name}</h1>
                            <h3 className='text-lightpink text-center'>{item.designation}</h3>

                            
                            <PortableText
                                value={item.message}
                                components={{
                                    block: {
                                        normal: ({ children }) =><ShowMoreComponent>{children}</ShowMoreComponent>
                                    }
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
