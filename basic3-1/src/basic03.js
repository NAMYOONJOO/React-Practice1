// 숫자만 입력받는 텍스트 박스
import React from "react";

class  NumberForm extends React.Component {
    //마운트 (초기값 설정 등)
    constructor(props){
        super(props)
        this.state = {value : ''}
    }
    onChange(e){
        const newValue = e.target.value
        const result = newValue.replace(/[^0-9]/g,"")
        this.setState({value:result})
    }
    doSubmit(e){
        window.alert('전송 : '+ this.state.value)
        e.preventDefault()
    }
    render(){
        //event method binding
        const onChange = (e)=>this.onChange(e)
        const doSubmit  = (e)=>this.doSubmit(e)
        const form = <form doSubmit={doSubmit}>
            <input onChange={onChange} type ='text' value ={this.state.value}/>
            <input type = 'submit' value='전송'/>
        </form>

        return form
    }
}

function Basic03() {
    return <div><NumberForm/></div>
}

export default Basic03