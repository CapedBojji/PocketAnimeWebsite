import { CSSProperties } from "react"



function BackgroundVideo()
{

    const VideoPlayerStyles : CSSProperties = {
        
    }
    return (<>
        <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute bottom-[40px] left-[40px] w-10 h-10 p-4 flex justify-center items-center">
                <Icon src="overwatch/homepage/background-play-icon.svg"/>      
            </div>       
            <div className="absolute w-full h-full top-0">
                <VideoPlayer src="" controls={false} playing={true} loop={true} styles={VideoPlayerStyles}/>
            </div>
        </div>    
    
    </>)
}


export default BackgroundVideo