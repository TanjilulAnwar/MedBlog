import React from "react"
import{Link} from "react-router-dom"

const navlinks=[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'Contact us',
        path:'/contact-us'
    },
    {
        title:'Login',
        path:'/login'
    }


]
function Navigation(){
    return(
        <nav className="site-navigation" >
            <span>breath YOUNG</span>
            <ul>
               {navlinks.map((link,index)=>(
                    <li key={index}>
                        
                        <Link to={link.path}>{link.title }</Link>

                    </li>
               ))
                   } 
            </ul>

        </nav>
    )
}

export default Navigation