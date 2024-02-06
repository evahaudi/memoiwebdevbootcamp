import {useState, useEffect} from "react"
import Axios from "axios"

let url="/users"
const App =()=>{
    const [data, setdata] = useState([]);
    useEffect =(()=>{
        try {
            const fetchData =async ()=>{
                const response=await Axios.get(url)
                const  data=await response.json
                setdata(data)
            }
        fetchData()
        }catch(error){
            console.error("An error occured:", error)
        }
    },[] )
    return(
        <div>
            <p>Loading?</p>(

            ):(
                {data.map((data)=>{

                }

                )}
            )
        </div>
    )
}
export default App;