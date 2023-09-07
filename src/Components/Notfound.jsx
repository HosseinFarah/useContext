import { useNavigate } from "react-router-dom";
const Notfound=()=>{
    const navigate = useNavigate();
    return (
        <>
    404 Error
    <button onClick={()=>{navigate("/")}}>Home</button>
        </>
    )
}
export default Notfound;