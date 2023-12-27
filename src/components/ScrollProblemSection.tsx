import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap"

export const ScrollProblemSection = () => {
  const triggerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    let scroll = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,

    })



  }, [])


  return (
    <section ref={triggerRef} className='flex justify-around py-6 bg-brown   text-white px-20 space-x-10'>

      <div ref={leftRef} className='flex items-stretch h-screen'>
        <span className='text-6xl self-center text-lightpink'>
          <span className="italic-text">
            So,
          </span>
          Do not <br /> 
          <span className="mx-2">get</span>
          <span className="mx-2">worried</span>
          <div className='flex items-center justify-start'>
            <span>
              about
            </span>
            <span>

              <svg width="210" height="20" viewBox="0 0 254 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M252.845 21.5167C253.862 20.4998 253.862 18.8512 252.845 17.8344L236.275 1.26408C235.258 0.247239 233.609 0.247239 232.592 1.26408C231.575 2.28091 231.575 3.92953 232.592 4.94637L247.321 19.6755L232.592 34.4047C231.575 35.4215 231.575 37.0702 232.592 38.087C233.609 39.1038 235.258 39.1038 236.275 38.087L252.845 21.5167ZM0 22.2793L251.004 22.2793V17.0718L0 17.0718L0 22.2793Z" fill="#FFD4F1" />
              </svg>
            </span>
          </div>

        </span>
      </div>

      <div className='flex flex-col  justify-center '>

        <div className='flex items-center justify-between relative  border-lightpink h-screen'>
          <span className='text-xl text-lightpink w-44'>Does their work meet our standards?</span>
          <svg width="44" height="44" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.3444 58.8662V32.0475H24.3633V24.1266C28.3965 24.1266 31.1199 23.5445 32.5336 22.3803C33.9473 21.216 34.6542 19.241 34.6542 16.4552H43.3858V58.8662H33.3444Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>
          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>

        <div className='flex p-0 items-center justify-between  border-lightpink  h-screen relative'>
          <span className='text-xl text-lightpink w-44'>Is this within my budget range?</span>
          <svg width="44" height="44" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2617 58.8662C19.2617 53.7519 20.114 49.6356 21.8188 46.5171C23.5236 43.3571 26.3302 40.7584 30.2386 38.721L37.0369 35.1659C40.1553 33.5443 41.7146 31.299 41.7146 28.4301C41.7146 26.8916 41.2364 25.665 40.2801 24.7503C39.3653 23.794 38.1387 23.3158 36.6003 23.3158C34.646 23.3158 33.1284 23.9603 32.0473 25.2492C31.0078 26.4966 30.4881 28.3053 30.4881 30.6754H20.1972C20.1972 26.1016 21.6733 22.4426 24.6254 19.6984C27.6191 16.9126 31.59 15.5197 36.5379 15.5197C41.4027 15.5197 45.2072 16.6423 47.9515 18.8876C50.6957 21.0913 52.0678 24.1474 52.0678 28.0559C52.0678 33.7107 49.2612 38.0141 43.648 40.9663L37.3487 44.3342C35.5192 45.3321 34.2095 46.2676 33.4195 47.1408C32.671 48.014 32.0889 49.1782 31.6731 50.6335H51.6936V58.8662H19.2617Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>

          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>

        </div>
        <div className='flex items-center justify-between  border-lightpink h-screen relative'>
          <span className='text-xl text-lightpink w-32'>How reliable are they?</span>
          <span className='border p-2 rounded-full'>1</span>
          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>
        <div className='flex items-center justify-between  border-lightpink h-screen relative'>
          <span className='text-lg text-lightpink w-56'>Are they ready to deliver results under rapid changes and tight deadlines?</span>
          <svg width="44" height="44" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.6915 38.2844V46.829H47.6396V58.8662H37.7229V46.829H20.0725V16.4552H29.9892V38.2844H37.7229V27.3074H47.6396V38.2844H52.6915Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>

          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>

        <div className='flex items-center h-screen relative'>
          <span className='font-bold text-2xl text-lightpink '>
            <span className="uppercase">Let’s</span>
            <span className="italic-text mx-1">Find</span>
            <span className="uppercase mx-2"> 
              out
            </span>
            <br/>
            <span className="uppercase">
            How we solve
            </span>
            <br/>
            <span className="uppercase"> these </span>
            <span className="italic-text mx-1">problems </span>
            <span className="uppercase">
              ?
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}