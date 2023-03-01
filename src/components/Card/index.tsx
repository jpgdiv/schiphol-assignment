import {  PropsWithChildren } from "react"

type ICardProps = PropsWithChildren<{
    header: string,
    subheader?: string,
    badge?: string,
    size?: "sm" | 'lg' | 'xs'
 }>

export function Card({children, header, subheader, badge= "", size='sm'}:ICardProps) {

    return <div className={`card card--${size}`}>
        <h1 className="card--header"><span>{header}</span><span className="card--header--badge">{badge}</span></h1>
        <h2 className="card--subheader">{subheader}</h2>
        <div className="card--content">{children}</div>
    </div>
} 