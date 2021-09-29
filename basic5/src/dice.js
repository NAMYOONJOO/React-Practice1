const express = require('express')
const app = express()
const portNo = 3000

app.get('/',(req,res)=>{
    res.send(
        '<p><a href="/dice/6">6면체 주사위</a>'+
        '<a href="/dice/12">12면체 주사위</a></p>'
    )
})
//경로 대응하기 (1)
// app.get('/dice/6',(req,res)=>{
//     res.send('주사위 값 (1~6)'+dice(6))
// })
// app.get('/dice/12',(req,res)=>{
//     res.send('주사위 값 (1~12)'+dice(12))
// })

//경로 대응하기 (2)
app.get('/dice/:num',(req,res)=>{
    res.send('주사위 값 : '+dice(req.params.num))
})
function dice(n){
    return Math.floor(Math.random(n)+1)
}

app.listen(portNo,()=>{
    console.log('server start')
})
