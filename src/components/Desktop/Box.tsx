import type { WorksType } from "@/types"
import { buildImageUrl, getImageDimensions } from "@sanity/asset-utils"
import Image from "next/image"

export const Box = ({ imageUrl, name, _id }: WorksType) => {

    const { width, height } = getImageDimensions(imageUrl)

    console.log(width, height)

    if (height > width) {
        return (
            <div key={_id} className="rounded-xl overflow-hidden relative h-full w-full align-top row-span-2">
                <Image src={imageUrl} placeholder="blur" blurDataURL={imageUrl} loading="lazy" fill={true} alt={name} className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" />
            </div>
        )
    }

    else if (height < width) {
        return (
            <div key={_id} className="rounded-xl overflow-hidden relative h-full w-full align-top col-span-3 row-span-3">
                <Image src={imageUrl} placeholder="blur" blurDataURL={imageUrl} loading="lazy" alt={name} fill={true} className="absolute top-0 bottom-0 left-0 right-0  w-full h-full" />
            </div>
        )
    }

    else {
        return (
            <div key={_id} className="rounded-xl overflow-hidden relative h-full w-full align-top">
                <Image src={imageUrl} placeholder="blur" blurDataURL={imageUrl} loading="lazy" alt={name} fill={true} className="absolute top-0 bottom-0 left-0 right-0  w-full h-full" />
            </div>
        )
    }

}