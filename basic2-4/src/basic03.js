import React from 'react';
//클래스로 컴포넌트 정의 
class Greeting extends React.Component{
    render(){
        return <h1>{this.props.type}</h1>
    }
}
function Basic03(){
    const dom  = <div>
        <Greeting type = "Hello!"/>
        <Greeting type = "GoodMorning!"/>
    </div>
    return dom
}

export default Basic03


