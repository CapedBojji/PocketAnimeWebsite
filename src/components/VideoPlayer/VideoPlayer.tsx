import { PropsWithChildren } from "react"
import ReactPlayer from "react-player"


type VideoPlayerProps = PropsWithChildren &  {
    src: string
    playing?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean
    light?: boolean
}
function VideoPlayer ({src, playing, muted, loop, controls, children, light} : VideoPlayerProps) {

    return (<>
        <ReactPlayer controls={controls} playing={playing} muted={muted} loop={loop} url={src} className="!h-full !w-full !object-cover react-player"  playIcon={<>{children}</>} light={light}/>
    </>)
}

export default VideoPlayer