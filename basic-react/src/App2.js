import React, { Children, useCallback, useState } from "react";
import './aaa.css'
import './bbb.css'
import Child from './Child'


const App = () =>{
   // return null // return  필수 (render), 태그 요소를 반환한다., for if문 사용하지 않는다     

    // (1)
    //    let a = 1111;
    //    let b = [1,2,3]

    //    return( <div>aaaa{b.map((item,idx) => {
    //        return <div>{item*2}</div>
    //    })}
    //         <div>bbb</div>
    //     </div>)
    
    // (2)
    //let a = <div className="bb">1111</div> //React.createElement(~)~ : 바벨이 처리해주는 부분이다.
    // let value = 1
    // let c = 'App'
    // let d = 'App2'
    // let b = a
    // console.log(a) // react object  내용이 콘솔로 찍힌다.

    //return <div className={value==1?c:d} style={{backgroundColor:'yellow'}}>{a}
    //return < className={c&&d} style={{backgroundColor:'yellow'}}>{a}
    // return <div className={c||d} style={{backgroundColor:'yellow'}}>{a}
    // {b}
    // {b}
    // {b}
    // {b}
    // </div>


    // (3) 루프 정의
    
    //let b = [1,2,3]


    //(4) 
    //let a = '자식 그려줘'
    //let a = <div>121221212</div> // react object
    //let a = 121221212
    //let a = <div>okok</div>
    //     return <div className="App">
    //     {/* {b.map((item,i)=>{
    //         //return a
    //         return <Child/>
    //     })} */}
    //     {/* <div style={{background:"red"}}>
    //         <Child aaa={a} bbb={b} ccc={b} >
    //             <div>난 안에꺼야</div>
    //         </Child>
    //         </div> */}
    //     <FileFieldEditor aaa={a} bbb={b} ccc={b}/>

    // </div>
    
    //(5) setState
    
    // [value, value를 바꿀 수 있는 함수 ] => 배열비구조화 할등으로 선언
    //useState(초기값)
    const [a, setA] = useState(1) //배열 비구조화 할당
    //const [b, setB] = useState({a:1}) //a의 setA가 호출(render)되도 b의 값은 바뀌지 않는다.  
    const [b, setB] = useState(111)
    const c = ((x)=>{
        return {a:x+1}
    })

    //const b = {a:1} //render 돌때 주소값이 바뀌게 된다. 
    // 이 값을 props를 받는 컴포넌트를 React.memo로 감싸도 값은 바뀌지 않지만
    // 주소값이 바뀌기때문에 자식 컴포넌트의 render가 발생하게 된다. 

    //let a = 1
    const onClick = ()=>{
        //a=2 // const로 상수 선언했기때문에 read only
        setA(2)
        //alert(1)
        setB(124)
        
    }
    
    

    console.log(a,b)

    // ****render 발생시 onclick이 새로 배치되기 때문에 부모에서 render가 발생한다 
    console.log("render")
    
    return <div className="App">
        <div onClick={onClick}>click</div>
        <div>{a}</div>
        <div><Child aaa={b}/></div> 

    </div>
  
    
} // react hook 객체
//return 후 줄바꿈 후 태그요소 작성시 ()소괄호 를 필수로 사용해야한다.

//컴포넌트를 나눈다
// const Child = () =>{
//     return <div className="bb">1111</div> 
// }

//const Child = (props) =>{
// const Child = ({aaa, bbb=1, ccc, children})=>{
//     //console.log(props.aaa)
//     console.log(aaa) // 비구조 할당
//     console.log(bbb) //undefined,1
//     console.log(bbb==ccc)//true 주소값

//     console.log(children)

//    // return <div className="bb cc">{children}</div> 
//     return <div className={`Child cc ${aaa||null}`}>{children}</div> 
// }

const App2 = () =>{
 
     let a = <div>1111</div>
     let b = {a:1}

     console.log(a) 
 
     return <div className="App2">{a}
     {b}
     {b}
     {b}
     {b}
     </div>
     
 } 

export default App
