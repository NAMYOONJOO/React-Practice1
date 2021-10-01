import React, {useState, useEffect} from 'react'
export default function Hook01(){
    // * 배열 구조 분해
    const [count, setCount] = useState(3)
    //useState(초기값)
    //this.state.count , this.setState와 유사
    function onClick() {
        setCount(count=>count+2)
        setCount(count=>count+1)
        //함수를 입력하면 처리되기 직전의 상태값을 매개변수로 받는다. 

        setCount(count+1)
        setCount(count+1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
        </div>
    )
}