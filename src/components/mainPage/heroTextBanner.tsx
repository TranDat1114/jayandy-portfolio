"use client"

import { Reveal } from "../effect/reveal";
import { Separator } from "../ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactLinks, navContent, } from "../type/types"
import Link from "next/link";


export function HeroTextBanner() {



    return (
        <div className="heroText">
            <Reveal>
                <p className="text-primary text-lg lg:text-xl font-bold mb-5">
                    ~ Introduction
                </p>
            </Reveal>
            <div className="text-3xl lg:text-5xl font-extrabold mb-10">
                <Reveal>
                    <p >
                        Say Hi from
                        <strong className="text-primary"> Jay Andy</strong>
                    </p>
                </Reveal>
                <Reveal>
                    <p>
                        Full-stack Developer
                    </p>
                </Reveal>
            </div>

            <Reveal>
                <em className="font-serif font-normal text-base lg:text-2xl text-muted-foreground">&quot;I sometimes analyze, sometimes program, and sometimes design&quot;</em>
            </Reveal>
            <Separator className="my-2 lg:my-4" />
            <Reveal>
                <em className="font-light text-base lg:text-2xl text-muted-foreground text-justify font-serif">
                    My real Vietnamese name is Tran Phu Dat but you can call me Jay or Andy, I&apos;m full-stack developer based in Ho Chi Minh city, Vietnam.
                </em>
            </Reveal>
            <Reveal>
                <em className="font-light text-base lg:text-2xl text-muted-foreground text-justify font-serif">
                    By the way, nice to meet you and welcome to my personal portfolio.
                </em>
            </Reveal>
            <Separator className="my-4" />
            <Reveal>
                <p className="text-primary text-lg lg:text-xl font-bold mb-3 lg:mb-6">
                    ~ Contact Social Profile
                </p>
            </Reveal>
            <div className="grid grid-flow-row grid-cols-5 items-center gap-4 justify-center">
                {
                    ContactLinks.map((link, index) => (
                        <Link key={index} href={link.href} target="_blank" className="col-span-1">
                            <Reveal>
                                <div className="grid grid-flow-row grid-row-2 items-center justify-center gap-4">
                                    <FontAwesomeIcon className="row-span-1 text-3xl lg:text-4xl m-auto" icon={link.icon} />

                                    <p className="row-span-1 text-center lg:text-2xl " >{link.title}</p>
                                </div>
                            </Reveal>

                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

