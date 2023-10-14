
/**
 * Section Headers
 * 
 * font-weight: 700 default
 * text-transform: uppercase
 * 
 * Breakpoint: max-width: tablet
 *      font-size: 36px
 *      line-height: 40px
 *    
 * Breakpoint: min-width: tablet
 *      font-size: 60px
 *      line-height: 66px
 * 
 */

import { PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren & {
    fontWeight?: 500 | 700 | 400
    fontSize?: string
    lineHeight?: string
    fontFamily?: string
}

export function H2({fontSize = "36px", fontWeight = 700, lineHeight = "40px", fontFamily="Config, sans-serif", children} : HeadingProps) {
    <h2 className={"uppercase m-0"} style={{fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight, fontFamily: fontFamily}}>{children}</h2>
}

export function H4({fontSize = "16px", fontWeight = 700, lineHeight = "22.4px", fontFamily="Config, sans-serif", children} : HeadingProps) {
    <h4 className={"uppercase m-0"} style={{fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight, fontFamily: fontFamily}}>{children}</h4>
}

