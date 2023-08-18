import FirstHomeSection from "../components/home/FirstSection.tsx"
import SecondHomeSection from "../components/home/SecondSection.tsx"
import ThirdHomeSection from "../components/home/ThirdSection.tsx"
import FourthHomeSection from "../components/home/FourthSection.tsx"

function HomePage(): JSX.Element {
    return (
        <>
            <FirstHomeSection />
            <SecondHomeSection />
            <ThirdHomeSection />
            <FourthHomeSection />
        </>
    )
}

export default HomePage
