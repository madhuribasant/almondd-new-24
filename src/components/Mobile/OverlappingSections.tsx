import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap"
import { useEffect } from "react"

export const OverlappingSections = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray<HTMLElement>(".sections");
        // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
        let tops = sections.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: () => section.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                pin: true,
                pinSpacing: false
            });
        });


    }, [])


    return (
        <>
            <section className="font-semibold bg-darkred h-screen flex justify-center items-center sections">
                <h1 className="text-lightpink text-8xl uppercase font-bold">
                    Hello <br /> There:)
                </h1>
            </section>
            <section className="font-semibold bg-black h-screen flex justify-center items-center sections">
                <p className="text-white text-4xl text-center   uppercase font-bold">
                    <span className="italic-text capitalize">
                        Weather
                    </span>
                    you
                    <span className="italic-text lowercase">
                        are a
                    </span>
                    startup, MVPS
                    <span className="italic-text lowercase">
                        or
                    </span>
                    Season Business
                </p>
            </section>

            <section className="bg-darkgreen h-screen flex justify-center items-center sections">
                <p className="text-white text-4xl text-center uppercase  ">
                    We have the
                    <span className="italic-text lowercase">
                        design solutions
                    </span>

                    for any project you have in mind!

                </p>
            </section>
        </>
    )
}

