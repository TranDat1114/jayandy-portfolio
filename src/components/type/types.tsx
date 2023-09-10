interface navContent {
    title: string;
    href: string;
    icon?: any;
}

import { faFacebook, faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//Contact link
const ContactLinks: navContent[] = [
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
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/Jayzneverzz",
        icon: faFacebook
    }
]
export type {navContent}
export {ContactLinks}