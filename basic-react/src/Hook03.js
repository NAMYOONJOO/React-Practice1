import React, {useState, useEffect} from 'react'

export default function Hook03(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title =`업데이트 횟수 : ${count}`
    })
    return(<div>
        <button onClick = {()=>setCount(count+1)}>increase</button></div>
    )
}