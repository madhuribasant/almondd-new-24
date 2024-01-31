import { TestimonialType } from "@/types"
import Carousel from "./Carousel"



export const MobileTestimonial = ({ testimonialsData }: { testimonialsData: TestimonialType[] }) => {


    return (
        <section className="h-screen bg-darkpink py-10 flex flex-col items-center justify-around text-white">
            <h1 className=" text-4xl text-center text-lightpink">
                HEAR FROM OUR
                <span className="italic-text">
                    previous
                </span>
                CLIENTS
            </h1>

           <Carousel data={testimonialsData}/>

        </section>
    )
}