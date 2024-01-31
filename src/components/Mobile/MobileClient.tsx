import Image from "next/image"

export const MobileClient = () => {
    return (
        <section className="text-olive h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl">
                <span className="italic-text Captialize">
                    Brand</span>who Loves us</h1>

            <div className="grid grid-cols-2 auto-rows-[150px]">
                <div className="grid place-items-center   ">
                    <Image src="/brands/dutypar-logo.png" alt="dutypar logo" width={150} height={100} />
                </div>
                <div className="grid place-items-center    ">
                    <Image src="/brands/etos.png" alt="Etos logo" width={100} height={100} />
                </div>
                <div className="grid place-items-center    ">
                    <Image src="/brands/grok.png" alt="Grok logo" width={100} height={100} />
                </div>
                <div className="grid place-items-center    ">
                    <Image src="/brands/park.png" alt="Park logo" width={200} height={200} />
                </div>
                <div className="grid place-items-center">
                    <Image src="/brands/emarald.png" alt="Emerald logo" width={150} height={150} />
                </div>
            </div>
        </section>
    )
}