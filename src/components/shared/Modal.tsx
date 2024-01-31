import { ElementType, SetStateAction, useEffect, useState } from "react"

import gsap from "gsap"
import ReactDOM from "react-dom"
import Select from "react-select"
import makeAnimated from 'react-select/animated';
import emailjs from "@emailjs/browser";

interface ModalProps {
    setShowModal: (value: SetStateAction<boolean>) => void
    showModal: boolean
}


const animatedComponents = makeAnimated();

export const Modal = ({ setShowModal, showModal }: ModalProps) => {
    const [modalTimeline] = useState(gsap.timeline({ paused: true }))
    const [modalRoot, setModalRoot] = useState<HTMLElement>()
    const [selectedOption, setSelectedOption] = useState<any>();
    const [selectCompany, setSelectCompany] = useState<any>()
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        budget: 10000,

    })


    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const handleSubmit = () => {
        emailjs
            .send(
                // @ts-ignore
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                {
                    to_name: "Almondd",
                    client_name: data.name,
                    client_email: data.email,
                    message: JSON.stringify(data),
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
            );

    }

    const domainOptions = [
        { value: 'technology', label: 'Technology' },
        { value: 'finance', label: 'Finance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'education', label: 'Education' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'sports', label: 'Sports' },
    ]


    const servicesOptions = [
        { value: 'web design', label: 'Web Design' },
        { value: 'web development', label: 'Web Development' },
        { value: 'seo', label: 'SEO' },
        { value: 'content marketing', label: 'Content Marketing' },
        { value: 'graphic design', label: 'Graphic Design' },
        { value: 'digital marketing', label: 'Digital Marketing' },
        { value: 'social media', label: 'Social Media' },

    ]

    useEffect(() => {
        if (typeof window === "undefined") return

        const elm = document.querySelector("#modal-root") as HTMLElement
        setModalRoot(elm)

    }, [])



    useEffect(() => {
        if (!modalRoot) return

        modalTimeline.to(
            ".modal", {
            x: 0,

            duration: 0.5,
            ease: "expo.out"
        }).reverse()
    }, [showModal])

    useEffect(() => {
        modalTimeline.reversed(!showModal)
    }, [showModal])



    const { budget, name, email, message } = data

    const ModalElement = (

        <div className=" modal bg-violet fixed top-0 left-0 z-20 h-screen overflow-y-auto w-full font-gt " data-lenis-prevent>
            <div className="flex justify-between items-center p-3">
                <h1 className="text-3xl text-center text-goldyellow font-bold uppercase mx-auto"> Ready to
                    <span className="italic-text lowercase">
                        connect?
                    </span>
                    <br/>
                    We'd love to 
                    <span className="italic-text lowercase">
                    work
                    </span>
                    <br/>
                     with you </h1>

                <button onClick={() => setShowModal(!showModal)}><svg xmlns="http://www.w3.org/2000/svg" height="52" width="48" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
            </div>


            <div className="modal-content mt-3 flex flex-col space-y-5 justify-evenly mx-5 md:mx-20 overflow-y-auto py-6">
                <label className="grid" htmlFor="company">
                    <span className="text-goldyellow text-md md:text-xl">Name of your company:</span>
                    <input id="company" name="name" type="text" className="bg-transparent text-white placeholder:text-white border-b-2 border-goldyellow  outline-none focus:outline-none active:outline-none text-md md:text-xl" value={name} onChange={handleChange} />
                </label>

                <label className="grid" htmlFor="email">
                    <span className="text-goldyellow text-md md:text-xl">Email:</span>
                    <input type="email" name="email" className="bg-transparent placeholder:text-white text-white  border-b-2 border-goldyellow  outline-none focus:outline-none active:outline-none text-md md:text-xl" value={email} onChange={handleChange} />
                </label>


                <label className="grid space-y-3" htmlFor="domain">
                    <span className="text-goldyellow text-md md:text-xl">Company Domain:</span>
                    <Select
                        options={domainOptions}

                        value={selectCompany}
                        onChange={(data) => setSelectCompany(data)}
                        isSearchable={true}
                    />

                </label>

                <label htmlFor="">
                    <span className="text-goldyellow text-md md:text-xl">Services your are looking for*</span>
                    <Select
                        options={servicesOptions}
                        value={selectedOption}
                        onChange={(data) => setSelectedOption(data)}
                        isSearchable={true}
                        isMulti={true}
                        className="bg-transparent"
                    />

                </label>

                <label className="grid space-y-3" htmlFor="budget">
                    <span className="text-goldyellow text-md md:text-xl">
                        Budget:
                    </span>
                    <input type="range" className="slider bg-goldyellow" name="budget" id="budget" min="10000" max="50000" value={budget} onChange={handleChange} />
                    <div className="flex justify-between">
                        <span className="text-goldyellow text-sm">
                            Rs 10,000
                        </span>
                        <span className="text-goldyellow text-sm">
                            Rs {budget}
                        </span>
                        <span className="text-goldyellow text-sm">
                            Rs 50,000 +
                        </span>
                    </div>
                </label>

                <label htmlFor="message" className="grid space-y-3">
                    <span className="text-goldyellow text-md md:text-xl">
                        Message:
                    </span>
                    <textarea name="message" className="text-white bg-transparent outline-none border-b-2 border-goldyellow " value={message} onChange={handleChange} id="mesasge" cols={30} rows={5}></textarea>
                </label>

                <button className="py-3 md:py-6 px-3 md:px-6 font-bold bg-goldyellow text-md md:text-xl" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )




    return modalRoot ? ReactDOM.createPortal(ModalElement, modalRoot) : <></>
}