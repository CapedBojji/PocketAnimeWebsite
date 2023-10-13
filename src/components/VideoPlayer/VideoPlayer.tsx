import ReactPlayer from "react-player"


type VideoPlayerProps = {
    src: string
    playing: boolean
    muted: boolean
    loop: boolean
    fullHeight?: boolean
}
function VideoPlayer ({src, playing, muted, loop, fullHeight} : VideoPlayerProps) {

    return <>
        {fullHeight ? <>
            <ReactPlayer playing={playing} muted={muted} loop={loop} url={src} className="full-height-react-player"/>
            </> : 
        <>
        <ReactPlayer playing={playing} muted={muted} loop={loop} url={src} className="full-width-react-player"/>     
        </>}
    </>
}

export default VideoPlayer