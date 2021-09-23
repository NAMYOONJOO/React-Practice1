// List component

import React from 'react';

class RList extends React.Component{
    render(){
        const items= this.props.items.split(",")
        const itemObj = items.map((e)=>{return <li>{e}</li>})

        let title = this.props.title
        if(!title) title= "List"
        
        const returnVal = 
        <div>
            <h3>{title}</h3>
            <ul>{itemObj}</ul>
        </div>

        return returnVal
    }
}

function Basic05(){
    const dom = <div>
    <RList title = "Colors" items="Red,Green,Blue,White"/>
    <RList title = "과일" items="바나나, 사과, 딸기"/>
    <RList title = "야채" items="무, 당근, 오이"/>
    </div>
    return dom 
}

export default Basic05