setInterval(ShowClock,1000)
function ShowClock(){
    const d = new Date()
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const elem = <div><h1>{hour}:{min}:{sec}</h1></div>

    return elem
}
export default ShowClock