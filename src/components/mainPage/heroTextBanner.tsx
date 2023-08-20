"use client"

import { Reveal } from "../effect/reveal";

export function HeroTextBanner() {
    return (

        <div className="heroText">
            <Reveal>
                <p className="text-lg font-normal mb-5">
                    ~ Introduction
                </p>
            </Reveal>
            <Reveal>
                <p className="text-4xl font-extrabold mb-10">
                    Say Hi from
                    <strong className="text-primary">JayAndy</strong>, Software Developer
                </p>
            </Reveal>
            <Reveal>
                <em className="font-light text-muted-foreground">“I sometimes analyze, sometimes program, and sometimes design”</em>
            </Reveal>
        </div>
    );
}
