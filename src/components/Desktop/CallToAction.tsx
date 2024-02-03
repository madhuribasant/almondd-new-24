import Image from "next/image"
import { useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Modal } from "../shared/Modal"
export const CallToAction = () => {
    const [showModal, setShowModal] = useState(false)
    const modalTimeline = gsap.timeline({ paused: true })
    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        let t1 = gsap.timeline()
        // gsap.set(".anim-text", { yPercent:"100%" })
        gsap.to(".anim", {
            y: 0,
            stagger: 0.3,
            delay: 0.2,
            duration: 2,
            ease: "expo",
            scrollTrigger: {
                trigger: "#cta",
                start: "top center",
                end: "bottom center",

            }
        })
    }, [])
    return (

        <div id="cta" className="h-screen bg-lightblack flex flex-col justify-center items-center space-y-10">
            <h1 className=" text-5xl text-center text-lightpink">
                <div className="overflow-y-hidden">
                    <span className="italic-text anim">
                        Ready
                    </span>
                    <span className="uppercase anim">to connect? </span>
                </div>

                <div className="overflow-y-hidden">
                    <span className="uppercase anim">
                        We&apos;d love to
                    </span>
                    <span className="italic-text anim">
                        work
                    </span>
                    <span className="uppercase anim">
                        with you
                    </span>
                </div>
            </h1>
            <Image src="/meme.png" alt="CTA meme" width="300" height="300" />
            <div >
                <Modal setShowModal={setShowModal} showModal={showModal} modalTimeline={modalTimeline} />
            </div>
            <button onClick={() => setShowModal(!showModal)} className="bg-lightpink text-2xl text-black uppercase px-4 py-3 rounded-full">Lets Connect</button>
        </div>
    )
}