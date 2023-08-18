import Link from "next/link";
import { MobileMenu  } from "../menu/mobileMenu";
export default function Header() {

    return (
        //Desktop and tablet header
        <header className="bg-background sticky backdrop-blur z-50 border-b p-2 top-0 w-full">
            <div className="container flex h-14 flex-row justify-between items-center">
                <Link className="text-3xl font-extrabold tracking-tighter lg:text-5xl" href="/">Jay Andy</Link>
                <nav className="desktop-menu"></nav>
                <nav className="mobile-menu">
                    <div>
                        <MobileMenu/>                       
                    </div>
                </nav>
            </div>
        </header>
    )
}
