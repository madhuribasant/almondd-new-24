import { Playfair_Display } from 'next/font/google'

import { ScrollSection } from '@/components/ScrollSection'
import { ScrollProblemSection } from '@/components/ScrollProblemSection'
import { ReactLenis } from '@studio-freight/react-lenis'

import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { ElementRef, useEffect, useRef } from 'react'
import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { Clients } from '@/components/Clients'
import { Testimonial } from '@/components/Testimonial'
import { CallToAction } from '@/components/CallToAction'


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
    }
  ],
  variable: '--font-gt',
})

const playFair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-pf',
  display: "swap"
})



export default function Home() {
  
  const { pathname } = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div className={`${gtfont.variable} ${playFair.variable} font-gt`}>
      <ReactLenis root options={{ lerp: 0.1, duration: 2.5, smoothTouch: true, className:"h-auto" }}>

       
          <Navbar />
          <ScrollSection />
          <ScrollProblemSection />
          <Services />
          <Clients />
          <Testimonial />
          <CallToAction />
        
      </ReactLenis>
    </div>
  )
}
