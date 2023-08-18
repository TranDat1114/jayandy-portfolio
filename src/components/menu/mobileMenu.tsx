import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../theme/theme-button";

interface navContent {
  title: string;
  href: string;
  icon?: any;
}

export function MobileMenu() {
  //Time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = "🌄 Good morning";
  } else if (currentHour < 18) {
    greeting = "🌇 Good afternoon";
  } else {
    greeting = "🌃 Good evening";
  }

  //Contact link
  const ListNavContents: navContent[] = [
    {
      title: "Phone Number",
      href: "tel:+84347647856",
      icon: faPhone,
    },
    {
      title: "Email",
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"default"}>
          <FontAwesomeIcon className="w-[16px]" icon={faBars} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-10/12 md:w-[540px]">
        <SheetHeader className="text-left">
          <SheetTitle>Jay Andy</SheetTitle>
          <SheetDescription >
            <div className="grid grid-flow-row grid-cols-12">
              <div className="col-span-10 text-foreground font-medium italic text-justify">
                {greeting}, how are you doing?
                <p>
                  I just wanted to say hi and let you know that you are a wonderful person and a great friend.
                </p>
              </div>
                <Separator orientation="vertical" className="ms-4" />
              <div className="col-span-1">
                <ModeToggle />
              </div>
            </div>
            <Separator className="my-4" />
          </SheetDescription>
        </SheetHeader>
        <div className="w-full">
          <div id="Link-section-1" className="flex flex-col space-y-2">
            <Link href={"/About"}>
              <p className="text-lg text-foreground">About ~ <em className="text-muted-foreground text-xs">Some information about me</em></p>
            </Link>
            <Link href={"/Portfolio"}>
              <p className="text-lg text-foreground">Portfolio ~ <em className="text-muted-foreground text-xs">Jay Andy</em></p>
            </Link>
            <Link href={"/Blog"}>
              <p className="text-lg text-foreground">Blogs ~ <em className="text-muted-foreground text-xs whitespace-nowrap">I was write some thing wanna read?</em></p>
            </Link>
          </div>
          <Separator className="my-2 w-9/12" />
          <div id="Contact-section-1">
            <p className="text-lg text-foreground">Contact</p>
            <div className="grid grid-col items-center justify-start gap-2 w-full px-2">
              {ListNavContents.map((navItem, index) => (
                <Link className="text-left" key={index} href={navItem.href} target="_blank">
                  <div className="grid grid-flow-row grid-cols-6 gap-4 items-center">
                    <FontAwesomeIcon className="w-[16px] text-foreground col-span-1" icon={navItem.icon} />
                    <p className="col-span-5 text-opacity-75 text-muted-foreground whitespace-nowrap">
                      {navItem.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Separator className="my-4" />
          <div className="fixed bottom-0 flex flex-row space-x-2 items-center">
            <FontAwesomeIcon className="w-[16px] text-foreground" icon={faCopyright} />
            <Link href={"https://twitter.com/DatTranM4"} className="text-muted-foreground whitespace-nowrap" target="_blank">
              Tran Phu Dat - 2023</Link>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <p className="text-base text-foreground font-medium text-left">
              💕 <em className="italic">I hope you are happy today</em> 😊.
            </p>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
