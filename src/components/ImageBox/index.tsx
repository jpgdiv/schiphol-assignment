import {  PropsWithChildren } from "react"

type IImageBoxProps = PropsWithChildren<{
    size: "sm" | "xl"
}>

function ImageBox({children, size}:IImageBoxProps)  {

    return <div className={`imagebox imagebox--${size}`}>{children}</div>
}

export default ImageBox