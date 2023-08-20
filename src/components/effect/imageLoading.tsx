"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface Props {
    imgSrc: string
    imgRatio?: number | undefined
}

export const ImageLoadingEffect = ({ imgSrc, imgRatio }: Props) => {

    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = async () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 400);
    };
    return (
        <AspectRatio ratio={imgRatio} className={`${pulsing ? "pulse" : ""} loadable w-full bg-primary`}>
            <motion.img className="rounded-md"
                initial={{ height: "16rem", opacity: 0 }}
                animate={{
                    height: imageLoading ? "16rem" : "auto",
                    opacity: imageLoading ? 0 : 1
                }}
                transition={{
                    height: { delay: 0, duration: 0.4 },
                    opacity: { delay: 0.5, duration: 0.4 }
                }}
                onLoad={imageLoaded}
                width="100%"
                src={imgSrc}
            />

        </AspectRatio>

    )
}