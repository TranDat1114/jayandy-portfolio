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
import { faBars, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "../theme/theme-button";
import { ContactDropDownMenu } from "./contactCollapsible";



export function MobileMenu() {
  //Time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = "🌄Good morning";
  } else if (currentHour < 18) {
    greeting = "🌇Good afternoon";
  } else {
    greeting = "🌃Good evening";
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"default"} size={"icon"}>
          <FontAwesomeIcon className="w-[1.2rem] h-[1.2rem]" icon={faBars} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-11/12 md:w-[540px]">
        <SheetHeader className="text-left">
          <SheetTitle>Jay Andy</SheetTitle>
          <SheetDescription >
            <div className="grid grid-flow-row grid-cols-12">
              <div className="col-span-9 text-foreground font-normal font-serif text-justify text-base">
                {greeting}. 👋
                {/* <p>
                  <em className="italic">
                    Oh! I just wanted to say hi and let you know that you are wonderful
                  </em>
                  😽
                  <em className="italic">
                    and great person.
                  </em>
                  😻
                </p> */}
              </div>
              <Separator orientation="vertical" className="ms-4" />
              <div className="col-span-2 flex justify-center">
                <ModeToggle />
              </div>
            </div>
            <Separator className="my-4" />
          </SheetDescription>
        </SheetHeader>
        <div className="w-full">
          <div id="Link-section-1" className="flex flex-col space-y-2">
            <Link href={"/About"}>
              <p className="text-base font-semibold text-foreground">About ~ <em className="text-muted-foreground text-xs font-serif">Some information about me</em></p>
            </Link>
            <Link href={"/Portfolio"}>
              <p className="text-base font-semibold text-foreground">Portfolio ~ <em className="text-muted-foreground text-xs font-serif">Jay Andy</em></p>
            </Link>
            <Link href={"/Blog"}>
              <p className="text-base font-semibold text-foreground">Blogs ~ <em className="text-muted-foreground text-xs whitespace-nowrap font-serif">I was write some thing, wanna read?</em></p>
            </Link>
          </div>
          <Separator className="my-2 w-9/12" />
          <ContactDropDownMenu />
          <Separator className="my-4" />
          <div className="fixed bottom-5 flex flex-row space-x-2 items-center">
            <Link href={"https://twitter.com/DatTranM4"} className="text-muted-foreground whitespace-nowrap" target="_blank">
              Dat Tram - <FontAwesomeIcon className="w-[16px] h-[16px] text-foreground" icon={faCopyright} /> 2023</Link>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <p className="text-base text-foreground font-normal font-serif text-left">
              💕 <em className="italic">I hope you are happy today</em> 😊.
            </p>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
