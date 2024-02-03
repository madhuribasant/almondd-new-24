import { Playfair_Display, Poppins } from 'next/font/google'

import { ReactLenis } from '@studio-freight/react-lenis'
import React, { ElementRef, useEffect, useRef } from 'react'

import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { CallToAction, Navbar, Clients, ScrollProblemSection, ScrollSection, Services, Testimonial, Works } from '@/components/Desktop/Index'
import type { TestimonialType, WorksType } from '@/types'

import { client } from '@/utils/sanity'
import { MobileCallToAction, MobileClient, MobileNavbar, MobileTestimonial, OverlappingSections, ProblemSection, ServicesMobile } from '@/components/Mobile/Index'



const gtfont = localFont({
  src: [
    {
      path: '../../fonts/GTWalsheimPro-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../fonts/GTWalsheimPro-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../fonts/GTWalsheimPro-CondensedRegular.woff2',
      weight: "normal",
      style: "normal"
    }
  ],
  variable: '--font-gt',
  preload:true
})

const playFair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-pf',
  display: "swap",
  preload:true
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  preload:true
});



const Desktop = (props: any) => {
  return (
    <>
      <Navbar />
      <ScrollSection />
      <ScrollProblemSection />
      <Works worksData={props.data[1]} />
      <Services />
      <Clients />
      <Testimonial testimonialsData={props.data[0]} />
      <CallToAction />
    </>
  )
}


const Mobile = (props: any) => {
  return (
    <>
      <MobileNavbar />
      <OverlappingSections />
      <ProblemSection />
      <ServicesMobile />
      <MobileClient />
      <MobileTestimonial testimonialsData={props.data[0]} />
      <MobileCallToAction />
    </>
  )
}


export default function Home(props: any) {
  const { pathname } = useRouter()
  const contentRef = useRef<ElementRef<'div'>>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])







  return (
    <>
     <style jsx global>{`
        .f-gt{
          font-family: ${gtfont.style.fontFamily};
        }
        .f-pf{
          font-family: ${playFair.style.fontFamily};
        }
        .f-pop{
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    <main className={`${gtfont.variable} ${playFair.variable}  font-gt font-bold`}>
     
      <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true, className: "h-auto" }}>
        <div className='hidden md:block'>
          <Desktop data={props.data} />
        </div>
        <div className='block md:hidden'>
          <Mobile data={props.data} />
        </div>

      </ReactLenis>
    </main>
    </>
  )
}


export async function getServerSideProps() {
  try {
    // Fetch testimonial data
    const data = await Promise.all([
      client.fetch<TestimonialType[]>(`*[_type == "testimonial"]{
        name,
        message,
        "imageUrl":image.asset->url,
        designation
      }`),

      client.fetch<WorksType[]>(`*[_type == "works"]|order(_createdAt asc){
        _id,
        name,
        category,
        "imageUrl":image.asset->url,
        _createdAt
      }`)


    ])
    // Fetch works data


    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        testimonialData: [],
        worksData: []
      }
    };
  }
}
