import { useContext, useState } from "react";
import { profileName } from "../App";

export const ChangeUserName = () => {
    const[newusername,setNewusername]=useState("");
    const{setUsername}= useContext(profileName)
  return (
    <>
      <input type="text" onChange={(e)=>{return setNewusername(e.target.value)}}/>
      <button onClick={()=>{setUsername(newusername)}}>Change UserName</button>
    </>
  );
};
