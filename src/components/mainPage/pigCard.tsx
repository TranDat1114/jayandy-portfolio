"use client"
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "../icons/icons";

import Spline from "@splinetool/react-spline"
import { url } from "inspector";
import { Reveal } from "../effect/reveal";

export function PigCard() {

  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);
  const [isMouseOver, setIsMouseOver] = React.useState(false);



  const handleSplineLoad = async () => {

    setIsSplineLoaded(true);

  };


  return (

    <div className="splineCur" onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>

      <Card className="w-full h-full bg-transparent">
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

          {isSplineLoaded ? (
            <></>
          ) : (
            <Icons.spinner className="m-auto h-16 w-16 animate-spin" />
          )}

          <Spline
            scene="https://prod.spline.design/JJBz8kYzQd93Wvab/scene.splinecode"
            onLoad={handleSplineLoad} />

        </CardContent>
        <CardFooter className="flex justify-center flex-col">
          <div className="text-base font-bold">
            <Reveal>
              {isMouseOver ? <p className="text-primary">OINK🐷 OINK🐷</p> : <p>💕💕💕</p>}
            </Reveal>
          </div>
          <Reveal>
            <em className="font-light ">
              He will help you create beautiful websites 👌
            </em>
          </Reveal>
        </CardFooter>
      </Card>

    </div>
  );
}



