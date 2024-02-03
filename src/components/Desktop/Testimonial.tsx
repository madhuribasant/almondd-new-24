import { TestimonialType } from "@/types"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { ReactNode, useState } from "react"


const ShowMoreComponent = ({ children }: { children: ReactNode }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <>


            <p>
                <q>

                    {showMore ? children : children?.toString().substring(0, 200)}
                </q>
            </p>

            <span className="text-green-600 cursor-pointer" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Read more' : 'Read less'}
            </span>
        </>

    )

}


export const Testimonial = ({ testimonialsData}: { testimonialsData: TestimonialType[] }) => {

    console.log(testimonialsData)


    return (
        <>
            <section className="h-auto py-10 flex flex-col justify-around overflow-x-hidden font-normal">
                <h1 className="self-center font-bold text-4xl mb-12">
                    <div className="overflow-y-hidden">
                        <span className="uppercase">HEAR FROM OUR</span>
                        <span className="italic-text">
                         previous 
                        </span>
                        <span className="uppercase">
                        CLIENTS
                        </span>
                    </div>
                </h1>
                <div className="self-center grid grid-cols-3 grid-flow-dense gap-3 f-pop ">
                    {testimonialsData.map((data, index) => (

                        <div className=" w-96 h-auto  border border-gray-200 p-5 rounded-md" key={index}>
                            <PortableText
                                value={data.message}
                                components={{
                                    block: {
                                        normal: ({ children }) => <ShowMoreComponent >{children}</ShowMoreComponent>,
                                    }
                                }}
                            />
                            <div className="flex items-center gap-2">

                                <Image className="w-10 h-10" width={30} height={30} src={data.imageUrl} alt={data.name} />
                                <div>

                                    <h1 className="font-bold">{data.name}</h1>
                                    <h3>{data.designation}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}