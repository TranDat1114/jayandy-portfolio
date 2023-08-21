"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface Props {
    imgSrc: string
    imgRatio: number | undefined
}

const ImageLoadingEffect = ({ imgSrc, imgRatio }: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {

        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    })

    return (
        <AspectRatio ref={ref} ratio={imgRatio} className="w-full relative overflow-hidden rounded-md">
            <motion.img className="w-full"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: .5, delay: .25 }}
                src={imgSrc}
                alt="loading..."
            />
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial={"hidden"}
                animate={slideControls}
                transition={{ duration: .5, ease: "easeIn" }}
                className="absolute top-2 bottom-2 left-0 right-0 z-20 bg-primary"
            />
        </AspectRatio>

    )
}

export { ImageLoadingEffect }