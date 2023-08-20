"use client"

import { Reveal } from "../effect/reveal";
import { Separator } from "../ui/separator";

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
                    <strong className="text-primary"> Jay Andy</strong>, Full-stack Developer
                </p>
            </Reveal>
            <Reveal>
                <em className="font-serif font-normal text-base text-muted-foreground">&quot;I sometimes analyze, sometimes program, and sometimes design&quot;</em>
            </Reveal>
            <Separator className="my-4" />
            <Reveal>
                <p className="font-light text-base text-muted-foreground text-justify font-serif">
                    My real Vietnamese name is Tran Phu Dat but you can call me Jay or Andy, I&apos;m full-stack developer based in Ho Chi Minh city, Vietnam.
                </p>
            </Reveal>
            <Reveal>
                <p className="font-light text-base text-muted-foreground text-justify font-serif">
                    By the way, nice to meet you and welcome to my personal portfolio.
                </p>
            </Reveal>
        </div>
    );
}
