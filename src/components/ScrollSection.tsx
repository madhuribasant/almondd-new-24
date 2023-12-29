import { ElementRef, useEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";






export const ScrollSection = () => {
    const containerRef = useRef<ElementRef<"div">>(null);
    const sectionRef = useRef<Array<HTMLElement>>([])
    const overlayRef = useRef<ElementRef<"div">>(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        let introTexts: HTMLElement[] = gsap.utils.toArray(".intro-text")
        let items: HTMLElement[] = gsap.utils.toArray("#item")

        let main = gsap.timeline({
            defaults: {
                duration: 5,
            }
        });

        items.forEach((item, i) => {
            let delay = 2 * (i + 1 - 1)
            let wordTL = gsap.timeline();
            if (i !== 0) {
                wordTL.from(item, { yPercent: 100, opacity: 0, ease: 'power2.out' });
            }

            if (i !== items.length - 1) {
                wordTL.to(item, { yPercent: -100, opacity: 0, ease: 'power2.out' });
            }
            console.log(delay)
            main.add(wordTL, delay);
        })

        main.delay(2)

        main.to(overlayRef.current, {
            duration: 2,
            y: "-100%",
            ease: "back.out"
        })

        introTexts.forEach(text => {
            let splitText = new SplitType(text, { types: "chars" })


            let splittextTimeline = gsap.timeline()

            splittextTimeline.from(splitText.chars, {
                yPercent: 100,
                stagger: 0.05,
                ease: "back.out",
                duration: 1.5,
            })
            main.add(splittextTimeline, "<")

        })


    }, [])


    useEffect(() => {

        let t1 = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: containerRef.current,
                end: "+=3000",
                scrub: 0.3,
                pin: true,
                // markers: true
            },
        })

        const pin = t1.to(
            sectionRef.current,
            {
                xPercent: -100 * (sectionRef.current.length - 1),
                duration: 3,

            }
        );

        const textElem: Array<HTMLElement> = gsap.utils.toArray(".text")

        textElem.forEach(text => {

            t1.
                to(text, {
                    y: 0,
                    stagger: 1.5,
                    opacity: 1,
                    delay: 0.5,
                    duration: 2,
                    ease: "back.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "30% center",
                        end: "right center",
                        scrub: true,
                        toggleActions: "play none",
                        // markers: true,
                        containerAnimation: pin,

                    }
                })

        })

        return () => {

            pin.kill();
        };
    }, []);



    return (
        <>
            <div ref={overlayRef} className="overlays font-gt flex justify-center items-center h-screen bg-yellow z-20 fixed w-screen">
                <h1 className="text-3xl text-white flex gap-2">Almondd for
                </h1>
                <div className="list h-10 p-2">

                    <span id="item">Startups</span>
                    <span id="item">Business</span>
                    <span id="item">MVPS</span>
                    <span id="item">All</span>
                </div>
            </div>

            <div className={`overflow-x-hidden font-gt relative bg-slate-400 `}>

                <div ref={containerRef} className="flex w-[300vw] h-screen">

                    <section ref={elem => elem && sectionRef.current.push(elem)} className="sec1 pin w-screen h-screen flex flex-col justify-center items-start bg-redpink text-darkpink px-28 space-y-3">
                        <span className="font-extrabold text-9xl uppercase intro-text overflow-hidden">Hello</span>
                        <span className="font-extrabold text-9xl uppercase intro-text overflow-hidden">There :)</span>
                    </section>
                    <section ref={elem => elem && sectionRef.current.push(elem)} className="sec2 pin w-screen h-screen flex flex-col justify-center items-start bg-black text-white px-28 space-y-6 ">
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="italic-text">
                                    Weather
                                </span>
                                <span className="uppercase mx-3 font-light">
                                    you
                                </span>
                                <span className="italic-text">
                                    are a
                                </span> </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="uppercase mx-3 font-light">
                                    Startups,  MVPS
                                </span>
                                <span className="italic-text">
                                    or
                                </span> </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="uppercase mx-3 font-light">
                                    Season Business
                                </span>
                            </span>
                        </div>

                    </section>
                    <section ref={elem => elem && sectionRef.current.push(elem)} className="sec3 pin w-screen h-screen flex flex-col justify-center items-start px-28 bg-darkgreen text-white space-y-3">
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="uppercase mx-3">
                                    We have the
                                </span>
                                <span className="italic-text">
                                    design
                                </span>  </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="italic-text">
                                    solutions
                                </span>
                                <span className="uppercase mx-3">
                                    for any
                                </span>
                            </span>

                        </div>
                        <div className="overflow-hidden">
                            <span className="text-white text-8xl text">
                                <span className="uppercase mx-3">
                                    project you have
                                </span>
                                <br />
                                <span className="uppercase mx-3">
                                    in mind!
                                </span>
                            </span>
                        </div>

                    </section>
                </div>
            </div>

        </>
    )
}

