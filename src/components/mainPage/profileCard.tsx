import React from "react";
import anhThe from "../../../public/assets/img/anhthe.jpg"

import { ImageLoadingEffect } from "../effect/imageLoading";

export function ProfileCard() {
    return (
        <div className="profile-card w-full h-full">

            {/* <AspectRatio ratio={1 / 1} asChild className="bg-primary rounded-md">
                    <Image
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center w-full h-full"
                        fill
                        src={jayAndy}
                        alt="JayAndy"
                    />
                </AspectRatio> */}
            <ImageLoadingEffect imgRatio={1 / 1} imgSrc={anhThe.src} />

        </div>
    );
}
