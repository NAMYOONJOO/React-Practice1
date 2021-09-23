function Greeting (props){
    return <h1>{props.type}</h1>
}

function Basic01(){
    const dom = <div>
        <Greeting type="Goodmorning1"/>
        <Greeting type="Hello!"/>
        <Greeting type="Good Afternoon"/>
    </div>
    return dom
}

export default Basic01