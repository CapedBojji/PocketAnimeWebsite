import { PropsWithChildren } from "react"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"
import { H2 } from "../../components/Text/Heading"
import SquareButton from "../../components/Button/SquareButton"
import Icon from "../../components/Icon/Icon"

const BackgroundVideoSrc = "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blta5464cb78c39385a/63369a3de3c2a2741688cb6b/F2P_Trailer.mp4"
const OverwatchNameImage = "overwatch/home/Masthead_Overwatch2_Logo.webp"


function Section ({children} : PropsWithChildren) {

    return <div className=" relative flex justify-center min-h-[600px] items-center flex-col pl-4 pr-4 pb-10 pt-0 lg:pl-10 lg:pr-10 lg:pt-20 lg:pb-20 lg:min-h-[800px] lg:max-h-[1050px] lg:h-[90vh]">
        {children}
    </div>
}



function Home() {


    return <> 
        <Section>
            <BackgroundVideo src={BackgroundVideoSrc} />
            <div className="z-10 w-full max-w-[1600px] mt-14 h-full flex flex-col">
               <div>
                <img src={OverwatchNameImage} className=""/>
                </div>
                <div>
                <H2 center fontFamily="impact, sans-serif" fontSize="32px" lineHeight="32px" letterSpacing="1px">A Future worth fighting for</H2>
                <p>TEAM-BASED ACTION  •  FREE TO PLAY</p>
                </div>
                <div>
                    <SquareButton>Play now</SquareButton>
                </div>
                <div>
                    <div className="w-12 h-12"><Icon src="overwatch/home/xbox.svg" objectFit="cover"/></div>
                    <div className="w-12 h-12"><Icon src="overwatch/home/xbox.svg" objectFit="cover"/></div>
                    <div className="w-12 h-12"><Icon src="overwatch/home/xbox.svg" objectFit="cover"/></div>
                    <div className="w-12 h-12"><Icon src="overwatch/home/xbox.svg" objectFit="cover"/></div>
                </div>
            </div>
        </Section>
    </>
}

export default Home