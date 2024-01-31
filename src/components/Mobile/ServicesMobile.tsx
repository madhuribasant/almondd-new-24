import Image from "next/image"

export const ServicesMobile = () => {
    return (
        <section className=" bg-violet text-goldyellow h-auto py-6 flex space-y-6 flex-col items-center justify-center">
            <h1 className="text-4xl text-center uppercase">You can
                <span className="italic-text lowercase">
                    benefit
                </span>
                <br />
                from our
                <br />
                <span className="italic-text lowercase">
                    Customize
                </span>
                Design
                <br /> Services</h1>

            <Image src="/27.png" alt="branding" width="300" height="400" />
            <Image src="/29.png" alt="social media" width="300" height="400" />
            <Image src="/39.png" alt="digital products" width="300" height="400" />
        </section>
    )
}