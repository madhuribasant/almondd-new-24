import { SetStateAction, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import gsap from "gsap"

interface ModalProps {
    setShowModal: (value: SetStateAction<boolean>) => void
    showModal: boolean
}


export const Modal = ({ setShowModal, showModal }: ModalProps) => {
    const [modalTimeline] = useState(gsap.timeline({ paused: true }))
    if (typeof window === 'undefined') return


    useEffect(() => {
        modalTimeline.to(
            ".modal", {
            x: 0,
            delay: 0.3,
            ease: "expo.out"
        }).reverse()
    }, [])

    useEffect(() => {
        modalTimeline.reversed(!showModal)
    }, [showModal])

    console.log(showModal)

    const ModalElement = (
        <div className="h-screen modal w-full bg-red-500 fixed top-0 left-0 z-20 ">
            <h1>Hello </h1>
            <button onClick={() => setShowModal(!showModal)}>close</button>
        </div>
    )

    const elm = document.querySelector("#modal-root")

    return elm && (showModal ? createPortal(
        ModalElement, elm
    ) : null)
}