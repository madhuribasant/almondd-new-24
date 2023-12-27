import Splide from "@splidejs/splide";
import { ElementRef, useEffect, useRef } from "react"
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";
export const Clients = () => {
    const splideRef = useRef<ElementRef<'section'>>(null)
    useEffect(() => {
        const splide = new Splide('.splide', {
            type: "loop",
            ease:"linear",
            drag: true,
            autoWidth: true,
            gap: 30,
            pagination: false,
            arrows: false,
            padding: 30,
            autoHeight: true,
            speed: 3000,
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                rewind: true
            },
        });
        // Mount the Splide instance
        splide.mount({ AutoScroll });
    }, [])

    return (
        <section className="h-screen flex flex-col justify-around bg-lightyellow overflow-x-hidden">
            <h1 className=" self-center text-6xl">
                <span className="italic-text">
                    Brands
                </span>
                <span className="uppercase">
                    who love us
                </span>
            </h1>
            <section ref={splideRef} className="splide bg-white" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                    <ul className="splide__list flex">
                        <li className="splide__slide">
                            <div className="inline-block relative w-64 h-20">
                                <Image src="/brands/dutypar-logo.png" alt="dutypar logo" fill={true} />
                            </div>
                        </li>
                        <li className="splide__slide  max-h-full">
                            <div className="inline-block relative w-56 h-20">
                                <Image src="/brands/etos.png" alt="Etos logo" fill={true} />
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="inline-block relative w-64 h-20">
                                <Image src="/brands/grok.png" alt="Grok logo" fill={true} />
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="inline-block relative w-64 h-20">
                                <Image src="/brands/park.png" alt="Grok logo" fill={true} />
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="inline-block relative w-64 h-20">
                                <Image src="/brands/emarald.png" alt="Grok logo" fill={true} />
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="inline-block relative w-64 h-20">
                                <Image src="/brands/emarald.png" alt="Grok logo" fill={true} />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}