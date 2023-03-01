import { PropsWithChildren } from "react"

type ICardContainerProps = PropsWithChildren<{
    cols: "onecol" | "twocol" | "threecol",
    size?: "sm" | "lg"
    gridbase?: string
 }>

export function CardContainer({children, size = "lg"}:ICardContainerProps) {

    return <div className={`cardcontainer cardcontainer--${size}` }>
 
        {children}
    </div>
} 