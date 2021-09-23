const msg = "<<변수의 값은 자동으로 이스케이프 처리>>"

function Basic05(){
    const html = <h2>{msg}</h2>
    return html
}
export default Basic05