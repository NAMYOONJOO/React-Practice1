import React, {useState} from 'react';

export default function Hook02(){
    const [state , setState] = useState({name:'',age:0})
    // 여러개의 상태값을 하나의 useState로 관리 할 수 있다. 
    //(useReducer라는 Hook이 더 적합하다. )
    // 객체를 이용해 표현

    //상태값 변경함수를 호출할 때는 전체객체를 새로 입력
    return(
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input 
            type="text"
            value = {state.name}
            onChange={e=>setState({...state,name:e.target.value})}/>
            <input 
            type="text"
            value = {state.age}
            onChange={e=>setState({...state,age:e.target.value})}/>
        </div>
    )



}