import { headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20
            flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={headerLogo}
                            alt="logo"
                            width={50}
                            height={40}
                            className="m-0" />
                    </a>
                    <p className="mt-6 text-base leading-7
                    font-montserrat text-white-400
                    sm:max-w-sm">
                        Get shoes ready for new term at your nearest ShoeWorld Store. Find Your 
                        perfect Size in the Store. Get Rewards
                    </p>
                    <div className="flex items-centr gap-5 mt-8">
                        {socialMedia.map((icon) => (
                           <div className="flex justify-center items-center
                           w-12 h-12 bg-white padd rounded-full "
                                key={icon.alt}>
                                <img src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                height={24}/>
                            </div> 
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between
                lg:gap-10 flex-wrap">
                    {footerLinks.map((section) => (
                        <div key={section.titl}>
                            <h4 className="font-montserrat text-2xl
                            leading-normal font-medium mb-6 text-white">
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="mt-3 font-montserrat
                                    text-base leading-normal text-white-400
                                    hover:text-slate-gray"
                                        key={link.name}>
                                        <a href={link.link}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                       </div> 
                    ))

                    }
                    
</div>

            </div>
        </footer>
    )
}
export default Footer
