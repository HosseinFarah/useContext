import { useContext } from "react"
import { profileName } from "../App"

export const Home = ()=>{
    const{username}=useContext(profileName)
    return (
        <div>
                This is Main Page : UserName: <br/>
                {username}
        </div>  
    )
}
