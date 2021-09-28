import React from "react";
import PropTypes from 'prop-types'

//범용적인 입력 컴포넌트
//사용 프로퍼티 : value, name, filter, onChange
//컴포넌트 사용법이 틀렸을 때 경고 출력하는 기능
//컴포넌트에 propTypes 객체, 프로퍼티 초기값을 설정하는 defaultProps 추가 
export default class FormInput extends React.Component{
    constructor(props){
        super(props)
        const v = this.props.value
        this.state = {
            value : v,
            isOK : this.checkValue(v)
        }
    }
    //패턴확인
    checkValue(s){
        if(this.props.pattern==null){
            return true
        }
        return this.props.pattern.test(s)
    }
    //값이 사용자에 의해 변경되었을 때
    handlerChange(e){
        const v = e.target.value
        //필터가 있다면 필터 적용
        const filter = this.props.filter
        let newValue = v
        if(filter!==null){
            newValue = newValue.replace(filter,'')
        }
        const newIsOk = this.checkValue(newValue)
        this.setState({isOK:newIsOk, value: newValue})


        if(this.props.onChange){
            this.props.onChange({target: this, value : newValue, isOK : newIsOk, name : this.props.name})
        }
    }
    render(){
        const msg = this.renderStatusMessage()
        return (<div><label>{this.props.label}<br/>
        <input type = 'text' name = {this.props.name} placeholder={this.props.placeholder} value={this.state.value}
        onChange = {e=>this.handlerChange(e)}/>{msg}
        </label></div>)
    }
    renderStatusMessage(){
        let msg = null
        const so = {
            margin:'8px',
            padding:'8px',
            color:'white'
        }
        if(this.state.isOK){
            so.backgroundColor = 'green'
            msg = <span style={so}>OK</span>
        }else{
            if(this.state.value!=='')
            so.backgroundColor='red'
            msg = <span style={so}>NG</span>
        }
        return msg
    }
   
}
/**
 * 중요
 * 프로퍼티 자료형을 정의합니다.
 */
FormInput.propTypes = {
 name : PropTypes.string.isRequired,
 label : PropTypes.string.isRequired,
 filter:PropTypes.object,
 pattern : PropTypes.object,
 value : PropTypes.string,
 placeholder : PropTypes.string,
 onchange : PropTypes.func
}

FormInput.defaultProps = {
    filter : null,
    pattern : null,
    value : '',
    placeholder : '',
    onchange : null
}
