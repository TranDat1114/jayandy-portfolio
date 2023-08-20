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

export function ProfileCard() {

  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);
  const [isMouseOver, setIsMouseOver] = React.useState(false);



  const handleSplineLoad = async () => {

    setIsSplineLoaded(true);

  };


  return (

    <div className="splineCur" onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>

      <Card className="w-full h-full">
        <CardHeader className="m-auto font-bold">
          <Reveal >
            <CardTitle className="text-lg  text-primary">
              <p>
                Hire my master NOW!!! OINK🐷! Human
              </p>
            </CardTitle>
          </Reveal>

          <CardDescription>
            <Reveal>
              <p>
                He will help you create beautiful websites
              </p>
            </Reveal>
          </CardDescription>
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
        <CardFooter className="m-auto">

          <Reveal>
            <div className="text-lg font-bold text-primary">
              {isMouseOver ? <p>OINK🐷 OINK🐷</p> : <p>💕💕💕</p>}
            </div>
          </Reveal>
        </CardFooter>
      </Card>

    </div>
  );
}



