import {useEffect,useState} from "react"

const PublicIp = ({version}) => {

    const [ip, setIp] = useState("")
    const [error, setError] = useState("")

    const apiUrl = version === "v6" ? "https://api6.ipify.org?format=json" : "https://api.ipify.org?format=json"

    useEffect(()=>{
        fetch(apiUrl)
        .then((response)=> response.json())
        .then((response)=>{
            setIp(response.ip)
            console.log(response.ip);
        })
        .catch((err)=>setError("Fetch failed",err))
    },[apiUrl])

return <>
    <div>
        <h2 className="ipversion">Your public IP{ version==="v4" ? "v4": "v6" } Address:</h2>
        {error? (
            <p className="error">{error}</p>
        ): ip ? (
            <p className="ip">{ip}</p>
        ): (
            <p className="loading">Loading....</p>
        )

        }
    </div>
</>

};

export default PublicIp;