//객체로 스타일 지정
//css 스타일
const css1 = {"colof":'red',"backgroundColor":'#f0f0ff',"fontSize":'2em'}
//자바스크립트 스타일
const css2 = {colof:'blue',backgroundColor:'#fff0f0',fontSize:'2em'}

function Basic04(){
    const styleMsg = 
    <div>
        <p style={css1}>죄는 미워하되 사람은 미워하지 말라</p>
        <p style={css2}>이것 또한 지나가리라</p>
    </div>
    return styleMsg
}

export default Basic04;