function PhotoText(props){
    const url = "img/"+props.image+".jpeg"
    const label = props.label
    const boxStyle = {
        border:"1px solid silver",
        margin:"8px",
        padding:"4px"
    }
    const comp = <div style={boxStyle}>
        <img src={url} width="128"/>
        <span>{label}</span>
    </div>
    return  comp
}

function Basic02(){
    const dom = <div>
        <PhotoText image="pic1" label="오키나와에서의 하루"/>
        <PhotoText image="pic2" label="오키나와 해변"/>
        <PhotoText image="pic3" label="푸른바다"/>
    </div>
    
    return dom
}

export default Basic02