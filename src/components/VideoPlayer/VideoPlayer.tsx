import ReactPlayer from "react-player"


type VideoPlayerProps = {
    src: string
    playing?: boolean
    muted?: boolean
    loop?: boolean
    fullHeight?: boolean
    controls?: boolean
}
function VideoPlayer ({src, playing, muted, loop, fullHeight, controls} : VideoPlayerProps) {

    return <>
        {fullHeight ? <>
            <ReactPlayer controls={controls} playing={playing} muted={muted} loop={loop} url={src} className="full-height-react-player" />
            </> : 
        <>
        <ReactPlayer controls={controls} playing={playing} muted={muted} loop={loop} url={src} className="full-width-react-player"/>     
        </>}
    </>
}

export default VideoPlayer