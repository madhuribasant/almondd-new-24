import Image from "next/image"
import { useState } from "react"
import { Modal } from "../shared/Modal"

export const MobileCallToAction = () => {
    const [showModal, setShowModal] = useState(false)
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
                        Wed love to
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
                <Modal setShowModal={setShowModal} showModal={showModal} />
            </div>
            <button onClick={() => setShowModal(!showModal)} className="bg-lightpink text-black text-2xl uppercase px-4 py-3 rounded-full">Lets Connect</button>
        </div>
    )
}