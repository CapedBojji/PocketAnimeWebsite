

type IconProps = {
    src: string
    objectFit: "fill" | "contain" | "cover" | "none" | "scale-down"
}

function Icon ({src, objectFit} : IconProps) {

    return <div className="w-full h-full flex justify-center items-center">
        <img src={src} className="w-full h-full" style={{objectFit: objectFit}}/>
    </div>
}

export function SvgIcon({src, objectFit} : IconProps) {

    return <div className="w-full h-full flex justify-center items-center">
        <svg className="w-full h-full" style={{objectFit: objectFit}}>
            <use href={src} width={"24px"} height={"24px"}></use>
        </svg>
    </div>
}


export default Icon