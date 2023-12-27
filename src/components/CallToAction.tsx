import Image from "next/image"
import { useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Modal } from "./Modal"
export const CallToAction = () => {
    const [showModal, setShowModal] = useState(false)
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

        <div id="cta" className="h-screen bg-lightblack text-white flex flex-col justify-center items-center space-y-10">
            <h1 className=" text-4xl text-center">
                <div className="overflow-y-hidden">
                    <span className="italic-text anim">
                        Ready
                    </span>
                    <span className="uppercase anim">to connect? </span>
                </div>

                <div className="overflow-y-hidden">
                    <span className="uppercase anim">
                        We'd love to
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
            <Modal setShowModal={setShowModal} showModal={showModal} />
            <button onClick={()=>setShowModal(!showModal)} className="bg-red-500 text-2xl uppercase px-4 py-3 rounded-full">Lets Connect</button>
        </div>
    )
}