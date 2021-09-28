import React from "react";

export default class ZipInput extends React.Component{
    constructor(props){
        super(props)

        const v = this.props.value? this.props.value : ''
        this.state = {
                    value : v,
                    isOk : this.checkValue(v)}
        
    }
    //패턴 확인
    checkValue(s){
        const zipPattern = /^\d{5}$/ 
        return zipPattern.test(s)
    }
    handleChange(e){
        const v = e.target.value

        const newValue = v.replace(/[^0-9]+/g,'')
        const newIsOk = this.checkValue(newValue)

        this.setState ({
                   value : newValue,
                    isOk : newIsOk
        })

    }

    renderStatusMessage(){
        const so = {
            margin:'8px', padding : '8px', color:'white'
        }
        let msg = null
        if(this.state.isOk){
            so.backgroundColor = 'green'
            msg = <span style={so}>OK</span>
        }else{
            if(this.state.value!==''){
                so.backgroundColor='red'
                msg=<span style={so}>NG</span>
            }
        }
        return msg
    }
    render(){

        const msg = this.renderStatusMessage()
        return(
            <div>
                <label>우편번호 : 
                    <input type='text' placeholder='우편번호를 입력해주세요' value = {this.state.value} 
                    onChange = {e=>this.handleChange(e)}/>
                    {msg}
                </label>
            </div>
        )
    }
}