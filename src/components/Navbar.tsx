import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect } from 'react'

export const Navbar = () => {

    useEffect(() => {

        const showAnim = gsap.from('.nav', { 
            y: -200,
            // margin:-10,
            paused: true,
            duration: 0.8,
            ease:"expo"
          }).progress(1);
          
          ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
              self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
          });
       

       
    }, [])

    return (
        <nav className='nav bg-white/5 border right-0 left-0 rounded-full px-6 py-3 mx-32 mt-5 border-white fixed z-10 flex justify-between items-center shadow-xl '>
            <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="Almondd Logo"
            />

            <ul className='flex justify-center items-center space-x-6'>
                <li className='uppercase text-white'><a href="#about">About Us</a></li>
                <li className='uppercase text-white'><a href="#services">Services</a></li>
                <li className='uppercase text-white'><a href="#work">Work</a></li>
            </ul>

            <button className='bg-red-500 text-white rounded-full px-6 py-3 uppercase'>Lets Connect</button>
        </nav>
    )
}