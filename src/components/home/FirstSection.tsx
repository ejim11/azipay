import appleLogo from "../../assets/apple-logo.svg"
import googleLogo from "../../assets/google-logo.svg"
import desktopImg1 from "../../assets/desktop-img-1.svg"
import desktopImg2 from "../../assets/desktop-img-2.svg"
import desktopImg3 from "../../assets/desktop-img-3.svg"
import desktopImg4 from "../../assets/desktop-img-4.svg"

function FirstHomeSection(): JSX.Element {
    return (
        <section className={"mt-[8rem] ml-[19rem]"}>
            <div>
                <p>
                    Run your
                    <span> payroll </span>
                    <span>easily</span> in
                    <span> seconds</span>
                </p>
                <p>
                    We’ve built an all-inclusive simple solution for individual and businesses to
                    manage staff, pay salaries, bills, and relevant taxes all at once.
                </p>
                <button>Start Using Free, Forever</button>
                <div>
                    <p>Start Using Free, Forever</p>
                    <div>
                        <a href={"https://www.google.com"}>
                            <span>
                                <img src={appleLogo} alt={"apple-logo"} />
                            </span>
                            <div>
                                <p>Download on the</p>
                                <p>Appstore</p>
                            </div>
                        </a>
                        <a href={"https://www.google.com"}>
                            <span>
                                <img src={googleLogo} alt={"google-logo"} />
                            </span>
                            <div>
                                <p>Get on </p>
                                <p>Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className={"block w-[67rem] h-[67rem] rounded-full bg-color-green"}></div>
                <img src={desktopImg1} alt={"desktop-img-1"} />
                <img src={desktopImg2} alt={"desktop-img-2"} />
                <img src={desktopImg3} alt={"desktop-img-3"} />
                <img src={desktopImg4} alt={"desktop-img-4"} />
            </div>
        </section>
    )
}

export default FirstHomeSection
