import {  PropsWithChildren } from "react"

type INavbarProps = PropsWithChildren<{
    logo: string
}>

function Navbar ({children, logo}:INavbarProps) {
    const noChildren = children == undefined || children == null;
    const childArray = noChildren
      ? []
      : Array.isArray(children)
      ? children
      : [children];

    return <div className={`navbar`}>
        <h1 className="navbar--logo">{logo}</h1>
        <ul className="navbar--menu" >
            {childArray.map((child, i) => (
                <li key={i} >
                    <a  className="navbar--item" href="#">{child}</a>
                </li>
              ))}
        </ul>
         <a className="navbar--item" href="#">inloggen</a> 
    </div>
}

export default Navbar