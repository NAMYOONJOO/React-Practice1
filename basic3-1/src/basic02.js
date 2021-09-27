import React from "react";
//3.2.1 입력 양식

//클래스형 컴포넌트
export class SimpleForm extends React.Component{
    constructor(props){
        super(props)
        //초기화
        this.state = {value : ''}
    }
    doChange(e){
        const newValue = e.target.value
        this.setState({value:newValue})
    }
    doSubmit(e){
        //여러가지 처리 내용을 작성하면 입력양식 데이터를 다른곳으로 전송하거나 할 수 있음
        
        window.alert('전송: '+this.state.value)
        e.preventDefault()
    }
    render(){
        //event method binding
        const doChange = (e)=>this.doChange(e)
        const doSubmit= (e)=>this.doSubmit(e)

        return(
            <div><form onSubmit={doSubmit}>
                <input type='text'
                value = {this.state.value}
                onChange={doChange}/>
                <input type='submit' value='전송'/>
                </form></div>
        )
    }
}
function Basic02() {
    return <div><SimpleForm/></div>
    
}

export default Basic02