import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { faBars } from "@fortawesome/free-solid-svg-icons";

const currentTime = new Date();
const currentHour = currentTime.getHours();
let greeting = "";

if (currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-4">
          <FontAwesomeIcon className="w-[24px]" icon={faBars}/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Jay Andy Navigation bar</SheetTitle>
          <SheetDescription>
          {greeting}, how are you doing? I just wanted to say hi and let you know that I am thinking of you. You are a wonderful person and a great friend. I hope you are happy and healthy.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
