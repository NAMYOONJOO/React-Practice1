import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(e){
        const name = this.props.name
        window.alert(name+'님 안녕하세요')
    }
    render(){
       return <div onClick={this.clickHandler}>click me</div>
   }
}

function  Basic03() {
    return <Hello  name="남윤주"/>
}

export default Basic03