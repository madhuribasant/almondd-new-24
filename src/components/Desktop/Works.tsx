import { TestimonialType, WorksType } from "@/types"
import { Box } from "./Box"
import { Fragment, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"


export const Works = ({ worksData }: { worksData: WorksType[] }) => {

  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    let t1 = gsap.timeline()
    // gsap.set(".a", { yPercent:"100%" })
    gsap.to(".a", {
      y: 0,
      stagger: 0.3,
      delay: 0.4,
      duration: 2,
      ease: "expo",
      scrollTrigger: {
        trigger: "#work",
        start: "top center",
        end: "bottom center",

      }
    })
  }, [])



  return (
    <section id="work" className="bg-white flex flex-col p-10 h-auto">
      <h1 className="self-center text-3xl text-center mb-12  ">
        <div className="overflow-y-hidden">
          <span className="uppercase a">Our team is </span>
          <span className="italic-text a">
            experienced
          </span>
        </div>
        <div className="overflow-y-hidden">
          <span className="uppercase a">
            and passionate about what we do
          </span>
        </div>
      </h1>





      <div className="gap-4 grid grid-cols-3 auto-rows-[200px] px-14 grid-flow-dense">
        {worksData.map((work, _) => (
          <Fragment key={work._id}>
            <Box {...work} />
          </Fragment>
        ))}
      </div>


    </section>
  )

}