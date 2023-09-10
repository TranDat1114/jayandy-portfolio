"use client"

import { Reveal } from "../effect/reveal";
import { Separator } from "../ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactLinks, navContent, } from "../type/types"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typical from "react-typical";

export function HeroTextBanner() {
    return (
        <div className="heroText">
            <Reveal>
                <p className="text-primary text-lg lg:text-xl font-bold mb-5">
                    ~ Introduction
                </p>
            </Reveal>
            <div className="text-3xl lg:text-5xl font-extrabold mb-5 flex items-center flex-col text-center">
                <Reveal>
                    <div>
                        <p className="text-xl">
                            Hi I&#39;m
                        </p>
                        <strong className="text-primary">Jay Andy</strong>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="mt-5">
                        Full-stack Developer
                    </p>
                </Reveal>
            </div>

            <Reveal>

            <em className="font-light text-base lg:text-lg text-muted-foreground text-justify font-mono">
                   
            <Typical
                steps={[
                  "My real Vietnamese name is Tran Phu Dat but you can call me Jay or Andy.", 1500,
                  "I'm full-stack developer based in Ho Chi Minh city, Vietnam.", 1500,
                  "Hi", 1500
                ]}
                loop={Infinity}
                wrapper="p"
              />
                </em>

            </Reveal>
            <Separator className="my-2 lg:my-4" />
            {/* <Reveal>
                <em className="font-light text-base lg:text-2xl text-muted-foreground text-justify font-serif">
                    My real Vietnamese name is Tran Phu Dat but you can call me Jay or Andy, I&apos;m full-stack developer based in Ho Chi Minh city, Vietnam.
                </em>
            </Reveal>
            <Reveal>
                <em className="font-light text-base lg:text-2xl text-muted-foreground text-justify font-serif">
                    By the way, nice to meet you and welcome to my personal portfolio.
                </em>
            </Reveal> */}
            <div className="flex w-full justify-evenly">
                <Reveal>
                    <Button variant={"default"}>
                        Donwload CV

                    </Button>
                </Reveal>
                <Reveal>
                    <Button variant={"outline"}>
                        Contact Infor
                    </Button>
                </Reveal>
            </div>

            <Separator className="my-4" />
            <Reveal>
                <p className="text-primary text-lg lg:text-xl font-bold mb-4 lg:mb-6">
                    ~ Contact Social Profile
                </p>
            </Reveal>
            <div className="grid grid-flow-row grid-cols-4 items-center gap-4 justify-center">
                {
                    ContactLinks.map((link, index) => (
                        <Link key={index} href={link.href} target="_blank" className="col-span-1">
                            <Reveal>
                                <div className="grid grid-flow-row grid-row-2 items-center justify-center gap-4">
                                    <FontAwesomeIcon className="row-span-1 text-3xl lg:text-4xl m-auto" icon={link.icon} />

                                    <p className="row-span-1 text-center lg:text-xl " >{link.title}</p>
                                </div>
                            </Reveal>

                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

