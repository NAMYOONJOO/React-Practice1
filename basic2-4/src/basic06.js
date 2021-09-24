// 2.4.5 화살표 함수로 컴포넌트 정의하기
// return 구문 생략 가능
function Basic06(){
    
    const TitleParts = (props)=>(
     <div  style={{backgroundColor:'red', color:'white'}}>
         <h3>{props.title}</h3>
     </div>   
    )
    const ContentParts = (props)=>(
        <div  style={{border:'1px solid blude', margin:15}}>
         <div>줄거리 : {props.body}</div>
     </div>
    )

    const  Book = (props)=>(
        <div>
            <TitleParts title = {props.title}/>
            <ContentParts body = {props.body}/>
        </div>
    )

    const result = <div>
        <Book title = "삼국지" body="옛날 중국이야기"/>
        <Book title = "삼국지" body="옛날 중국이야기"/>
        <Book title = "삼국지" body="옛날 중국이야기"/>
    </div>
    return result
} 

export default Basic06