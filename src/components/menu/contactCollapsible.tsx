"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Separator } from "../ui/separator"


interface navContent {
    title: string;
    href: string;
    icon?: any;
}

export function ContactDropDownMenu() {


    //Contact link
    const ListNavContents: navContent[] = [
        {
            title: "Phone: +84 347647846",
            href: "tel:+84347647856",
            icon: faPhone,
        },
        {
            title: "Email: dattranphu1114@gmail.com",
            href: "mailto:dattranphu1114@gmail.com",
            icon: faEnvelope
        },
        {
            title: "Twitter",
            href: "https://twitter.com/DatTranM4",
            icon: faTwitter
        },
        {
            title: "Github",
            href: "https://github.com/TranDat1114",
            icon: faGithub
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/tran-phu-dat-526a82288",
            icon: faLinkedin
        }
    ]

    const [isOpen, setIsOpen] = React.useState(true)


    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2"
        >
            <div className="grid grid-flow-row grid-cols-12 items-center">
                <div className="col-span-9">

                    <CollapsibleTrigger asChild>
                        <p className="text-base font-semibold text-foreground w-full">
                            Contact
                        </p>
                    </CollapsibleTrigger>
                </div>
                <Separator orientation="vertical" className="ms-4" />
                <div className="col-span-2 flex justify-center">
                    <CollapsibleTrigger asChild>
                        <Button variant="default" size="icon">
                            <FontAwesomeIcon className="h-[1.2rem] w-[1.2rem]" icon={(isOpen ? faAngleUp : faAngleDown)} />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
            <CollapsibleContent className="space-y-2">
                {ListNavContents.map((navItem, index) => (
                    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm" key={index}>
                        <Link className="text-left" href={navItem.href} target="_blank">
                            <div className="grid grid-flow-row grid-cols-6 gap-4 items-center">
                                <FontAwesomeIcon className="w-[16px] text-foreground col-span-1" icon={navItem.icon} />
                                <p className="col-span-5 text-opacity-75 text-muted-foreground whitespace-nowrap">
                                    {navItem.title}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}


            </CollapsibleContent>
        </Collapsible>
    )
}
