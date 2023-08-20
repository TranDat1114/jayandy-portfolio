"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

interface Props {
    children: JSX.Element,
    width?: "fit-content" | "100%"
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
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
        <div ref={ref} className="w-fit relative overflow-hidden" >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: .5, delay: .25 }}
            >
                {children}
            </motion.div>
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
        </div>
    )
}

export { Reveal }