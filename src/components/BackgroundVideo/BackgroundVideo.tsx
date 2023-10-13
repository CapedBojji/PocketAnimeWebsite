import { useState } from "react"
import VideoPlayer from "../VideoPlayer/VideoPlayer"

type BackgroundVideoProps = {
    src: string
}

function BackgroundVideo({src} : BackgroundVideoProps)
{

    const [playing, setPlaying] = useState<boolean>(true)

    return (<>
        <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute bottom-[40px] left-[40px] w-10 h-10 p-2 rounded-full flex justify-center items-center z-10 text-white bg-[rgba(93,113,152,.4)] cursor-pointer hover:bg-[rgba(93,113,152,.6)]" onClick={() => setPlaying(!playing)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 24 24"><path stroke="none" d="M17.333 4h-1.666C14.747 4 14 4.768 14 5.714v12.572c0 .947.746 1.714 1.667 1.714h1.666c.92 0 1.667-.767 1.667-1.714V5.714C19 4.768 18.254 4 17.333 4Zm-9 0H6.667C5.747 4 5 4.768 5 5.714v12.572C5 19.233 5.746 20 6.667 20h1.666c.92 0 1.667-.767 1.667-1.714V5.714C10 4.768 9.254 4 8.333 4Z"></path></svg>  
            </div>       
            <div className="absolute w-full h-full top-0">
                <VideoPlayer src={src} playing={playing} loop />
            </div>
        </div>    
    
    </>)
}


export default BackgroundVideo