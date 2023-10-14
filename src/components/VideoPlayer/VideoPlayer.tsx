import { PropsWithChildren } from "react"
import ReactPlayer from "react-player"


type VideoPlayerProps = PropsWithChildren &  {
    src: string
    playing?: boolean
    muted?: boolean
    loop?: boolean
    fullHeight?: boolean
    controls?: boolean
    light?: boolean
}
function VideoPlayer ({src, playing, muted, loop, fullHeight, controls, children, light} : VideoPlayerProps) {

    return <>
        {fullHeight ? <>
            <ReactPlayer controls={controls} playing={playing} muted={muted} loop={loop} url={src} className="full-height-react-player"  playIcon={<>{children}</>} light={light}/>
            </> : 
        <>
        <ReactPlayer controls={controls} playing={playing} muted={muted} loop={loop} url={src} className="full-width-react-player" playIcon={<>{children}</>} light={light}/>     
        </>}
    </>
}

export default VideoPlayer