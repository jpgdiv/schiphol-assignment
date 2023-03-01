import { PropsWithChildren } from "react";


export function Page({children}:PropsWithChildren) {


    return <div className="container">{children}</div>
}