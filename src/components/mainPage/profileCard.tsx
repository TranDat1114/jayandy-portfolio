import React from "react";
import anhThe from "../../../public/assets/img/anhthe.jpg"

import { ImageLoadingEffect } from "../effect/imageLoading";

export function ProfileCard() {
    return (
        <div className="profile-card w-full h-full">
            <ImageLoadingEffect imgRatio={1 / 1} imgSrc={anhThe.src} />
        </div>
    );
}
