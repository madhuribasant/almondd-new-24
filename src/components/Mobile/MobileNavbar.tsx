import Image from "next/image"


export const MobileNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 py-6 px-3 z-20 ">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
        </nav>
    )
}