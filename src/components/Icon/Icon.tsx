

type IconProps = {
    src: string
    objectFit: "fill" | "contain" | "cover" | "none" | "scale-down"
}

function Icon ({src, objectFit} : IconProps) {

    return <div className="w-full h-full flex justify-center items-center">
        <img src={src} className="w-full h-full" style={{objectFit: objectFit}}/>
    </div>
}

export default Icon