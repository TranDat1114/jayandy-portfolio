"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "../icons/icons";

import { Reveal } from "../effect/reveal";
import { Separator } from "../ui/separator";
import { Suspense, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));
export function PigCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation();

  useEffect(() => {

    if (isInView) {
      mainControls.start("visible")
    }
  })
  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);

  const [isMouseOver, setIsMouseOver] = React.useState(false);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };
  return (
    <>
      <Reveal>
        <p className="text-4xl font-bold text-pink-500">PIGGY</p>
      </Reveal>
      <Separator className="my-4" />
      <div className="splineCur" onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>

        <Card>
          <CardHeader className="font-bold ">
            <CardTitle className="text-base m-auto ">
              <Reveal >
                <p>
                  Hire my master<strong className="text-primary"> NOW!!!  OINK🐷!</strong>
                </p>
              </Reveal>
            </CardTitle>
          </CardHeader>
          <CardContent>

            <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: .5, delay: .25 }}
            >
              <Suspense fallback={<Icons.spinner className="m-auto h-16 w-16 animate-spin" />}>

                <Spline className="w-full h-full"
                  scene="https://prod.spline.design/JJBz8kYzQd93Wvab/scene.splinecode"

                />
              </Suspense>
              {/* <Spline scene="https://prod.spline.design/JJBz8kYzQd93Wvab/scene.splinecode" /> */}
            </motion.div>

          </CardContent>
          <CardFooter className="flex justify-center flex-col">
            <div className="text-base font-bold">
              <Reveal>
                {isMouseOver ? <p className="text-primary">OINK🐷 OINK🐷</p> : <p>💕💕💕</p>}
              </Reveal>
            </div>
            <Reveal>
              <em className="font-light">
                He will help you create beautiful websites
              </em>
            </Reveal>
          </CardFooter>
        </Card>

      </div>
    </>

  );
}



