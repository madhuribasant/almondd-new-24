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
          <span className='text-3xl text-lightpink w-56'>Does their work meet our standards?</span>
          <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.3444 58.8662V32.0475H24.3633V24.1266C28.3965 24.1266 31.1199 23.5445 32.5336 22.3803C33.9473 21.216 34.6542 19.241 34.6542 16.4552H43.3858V58.8662H33.3444Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>
          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>

        <div className='flex p-0 items-center justify-between  border-lightpink  h-screen relative'>
          <span className='text-3xl text-lightpink w-56'>Is this within my budget range?</span>
          <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2617 58.8662C19.2617 53.7519 20.114 49.6356 21.8188 46.5171C23.5236 43.3571 26.3302 40.7584 30.2386 38.721L37.0369 35.1659C40.1553 33.5443 41.7146 31.299 41.7146 28.4301C41.7146 26.8916 41.2364 25.665 40.2801 24.7503C39.3653 23.794 38.1387 23.3158 36.6003 23.3158C34.646 23.3158 33.1284 23.9603 32.0473 25.2492C31.0078 26.4966 30.4881 28.3053 30.4881 30.6754H20.1972C20.1972 26.1016 21.6733 22.4426 24.6254 19.6984C27.6191 16.9126 31.59 15.5197 36.5379 15.5197C41.4027 15.5197 45.2072 16.6423 47.9515 18.8876C50.6957 21.0913 52.0678 24.1474 52.0678 28.0559C52.0678 33.7107 49.2612 38.0141 43.648 40.9663L37.3487 44.3342C35.5192 45.3321 34.2095 46.2676 33.4195 47.1408C32.671 48.014 32.0889 49.1782 31.6731 50.6335H51.6936V58.8662H19.2617Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>

          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>

        </div>
        <div className='flex items-center justify-between  border-lightpink h-screen relative'>
          <span className='text-3xl text-lightpink w-56'>How reliable are they?</span>
          <svg width="56" height="56" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9055 27.375C14.7388 27.375 13.0721 26.8583 11.9055 25.825C10.7555 24.7917 10.1805 23.3167 10.1805 21.4H14.2555C14.2555 22.3 14.4888 22.9917 14.9555 23.475C15.4388 23.9583 16.1138 24.2 16.9805 24.2C17.7138 24.2 18.2971 24 18.7305 23.6C19.1805 23.2 19.4055 22.6667 19.4055 22C19.4055 20.4833 18.5138 19.725 16.7305 19.725H15.0305V16.625H16.7555C18.3555 16.625 19.1555 15.9333 19.1555 14.55C19.1555 13.9667 18.9555 13.5 18.5555 13.15C18.1555 12.8 17.6305 12.625 16.9805 12.625C16.2305 12.625 15.6388 12.8417 15.2055 13.275C14.7721 13.6917 14.5555 14.275 14.5555 15.025H10.5555C10.5555 13.3917 11.1388 12.0833 12.3055 11.1C13.4721 10.1167 15.0638 9.625 17.0805 9.625C18.9305 9.625 20.4138 10.05 21.5305 10.9C22.6471 11.75 23.2055 12.9 23.2055 14.35C23.2055 16.2833 22.1638 17.5417 20.0805 18.125C21.1471 18.325 21.9805 18.7833 22.5805 19.5C23.1971 20.2167 23.5055 21.1083 23.5055 22.175C23.5055 23.725 22.8971 24.9833 21.6805 25.95C20.4805 26.9 18.8888 27.375 16.9055 27.375Z" fill="#FFD4F1" />
                        <circle cx="17.3706" cy="18.1469" r="17.0244" stroke="#FFD4F1" stroke-width="0.69253" />
                    </svg>
                    <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>
        <div className='flex items-center justify-between  border-lightpink h-screen relative'>
          <span className='text-xl text-lightpink w-64'>Are they ready to deliver results under rapid changes and tight deadlines?</span>
          <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.6915 38.2844V46.829H47.6396V58.8662H37.7229V46.829H20.0725V16.4552H29.9892V38.2844H37.7229V27.3074H47.6396V38.2844H52.6915Z" fill="#FFD4F1" />
            <circle cx="36" cy="36" r="35.2824" stroke="#FFD4F1" strokeWidth="1.43524" />
          </svg>

          <span className="w-full h-[2px] bg-lightpink absolute mt-32"></span>
        </div>

        <div className='flex items-center h-screen relative'>
          <span className='font-bold text-4xl text-lightpink '>
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