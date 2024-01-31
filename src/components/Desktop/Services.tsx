import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { ElementRef, useEffect, useRef } from "react"

export const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<ElementRef<"section">>(null)

    useEffect(() => {
        let t1 = gsap.timeline()
        // gsap.set(".anim-text", { yPercent:"100%" })

        gsap.to(".anim-text", {
            y: 0,
            stagger: 0.3,
            duration: 2,
            ease: "expo",
            scrollTrigger:{
                trigger:sectionRef.current ,
                start: "top center",
                end: "bottom center",
                // markers: true,
                
            }
        })

    }, [])


    return (
        <>
            <section ref={sectionRef} id="services" className="h-screen flex flex-col items-center justify-center py-6 bg-violet">
                <h1 className="text-goldyellow text-8xl px-20 overflow-hidden">
                    <div className=" overflow-y-hidden">
                        <span className="uppercase anim-text ">You can</span>
                    </div>

                    <div className="overflow-y-hidden  ">
                        <span className="italic-text lowercase mx-5 anim-text">Benefit</span>
                        <span className="uppercase anim-text">
                            from
                        </span>
                    </div>

                    <div className="overflow-y-hidden ">
                        <span className="uppercase anim-text">
                            our
                        </span>
                        <span className="italic-text anim-text ">
                            Customize
                        </span>
                    </div>
                    
                    <div className="  overflow-y-hidden">
                        <span className="uppercase anim-text">
                            Design Services
                        </span>
                    </div>
                </h1>

            </section >

            <section className="h-screen grid place-items-center">
                <div className="flex space-x-6">
                    <Image src="/27.png" width="300" height="800" alt="branding" />
                    <Image src="/39.png" width="300" height="800" alt="Digital Products" />
                    <Image src="/29.png" width="300" height="800" alt="branding" />
                </div>
            </section>
        </>
    )

}