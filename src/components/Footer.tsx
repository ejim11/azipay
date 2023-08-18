import logo from "../assets/logo.svg"
import instagramImg from "../assets/Instagram.svg"
import twitterImg from "../assets/Twitter.svg"
import linkedinImg from "../assets/Group 36032.svg"
import facebookImg from "../assets/Group 36033.svg"

function Footer(): JSX.Element {
    const footerLinks = [
        {
            link: "https://www.instagram.com",
            img: instagramImg,
        },
        {
            link: "https://www.twitter.com",
            img: twitterImg,
        },
        {
            link: "https://www.linkedin.com",
            img: linkedinImg,
        },
        {
            link: "https://www.facebook.com",
            img: facebookImg,
        },
    ]

    return (
        <footer>
            <div>
                <img src={logo} alt={"logo"} />
                <p>Copyright © 2023 Eazipay.</p>
                <p>All rights reserved</p>
                <div className={"flex "}>
                    {footerLinks.map((link, i) => (
                        <a href={link.link} key={i}>
                            <img src={link.img} alt={"media img"} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
