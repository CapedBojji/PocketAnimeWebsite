
import {HeadingProps} from "./Heading"

function H2({fontSize = "36px", fontWeight = 700, lineHeight = "40px", fontFamily="Config Condensed, sans-serif", children} : HeadingProps) {
    return <h2 className={"uppercase m-0"} style={{fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight, fontFamily: fontFamily}}>{children}</h2>
}

export default H2