import { PropsWithChildren } from "react"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"

const BackgroundVideoSrc = "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blta5464cb78c39385a/63369a3de3c2a2741688cb6b/F2P_Trailer.mp4"
const OverwatchNameImage = "overwatch/home/Masthead_Overwatch2_Logo.webp"


function Section ({children} : PropsWithChildren) {

    return <div className=" relative flex justify-center items-center flex-col lg:pl-10 lg:pr-10 lg:pt-20 lg:pb-20 lg:min-h-[800px] lg:max-h-[1050px] lg:h-[90vh]">
        {children}
    </div>
}



function Home() {


    return <> 
        <Section>
            <BackgroundVideo src={BackgroundVideoSrc} />
            <div className="z-10">
               <div>
                <img src={OverwatchNameImage} className="w-full max-w-[1600px] mt-14 h-full flex flex-col"/>
                </div>
            </div>
        </Section>
    </>
}

export default Home