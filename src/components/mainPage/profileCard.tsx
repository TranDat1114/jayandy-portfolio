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
import Spline from '@splinetool/react-spline';

export function LoadingScreen() {
  return (
    <div className="loading-screen">
      <h1>Loading...</h1>
    </div>
  );
}

export function ProfileCard() {
  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };
  return (
    <>
      {isSplineLoaded ? <></> : <LoadingScreen />}

      <Spline
        className="bg-transparent"
        scene="https://prod.spline.design/JJBz8kYzQd93Wvab/scene.splinecode"
        onLoad={handleSplineLoad}
      />

    </>
  );
}


