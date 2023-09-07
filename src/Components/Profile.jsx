import { useContext } from "react"
import { profileName } from "../App"
import { ChangeUserName } from "./ChangeUserName"

export const Profile=()=>{
    const {username}= useContext(profileName)
    return(
        <>
            Profile Page: userName is: {username}<br/>
            <ChangeUserName/>
        </>
    )
}