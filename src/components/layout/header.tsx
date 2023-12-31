import Link from "next/link";
import { MobileMenu } from "../menu/mobileMenu";
import { DesktopMenu } from "../menu/desktopMenu";
export default function Header() {

    return (
        //Desktop and tablet header
        <header className="sticky backdrop-blur-lg z-50 border-b border-current p-2 top-0 max-h-20 w-ful">
            <div className="container flex h-14 flex-row justify-between items-center">
                <Link className="text-3xl font-extrabold tracking-tighter lg:text-5xl underline shadow-transparent drop-shadow-md" href="/">Jay Andy</Link>
                <nav className="desktop-menu">
                    <DesktopMenu />
                </nav>
                <nav className="mobile-menu">
                    <div>
                        <MobileMenu />
                    </div>
                </nav>
            </div>
        </header>
    )
}
