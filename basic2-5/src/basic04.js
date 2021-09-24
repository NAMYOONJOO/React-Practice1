import React from 'react';
//check box

class CBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {checked:false}
    }
    render(){
        let mark = '□'
        let bstyle = {fontWeight:'normal'}
        if(this.state.checked){
            mark ='■'
            bstyle = {fontWeight:'bold'}
            
        }
        const clickHandler = (e)=>{
            const newValue = !this.state.checked
            this.setState({checked:newValue})
        }
       return <div onClick={clickHandler} style={bstyle}>{mark} {this.props.label}</div>
   }
}



function Basic04() {
    return (
        <div>
            <CBox label='Apple'/>
            <CBox label='Banana'/>
            <CBox label='Orange'/>
            <CBox label='Mango'/>
        </div>
    )
}

export default Basic04