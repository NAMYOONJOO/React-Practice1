//POST 메서드 요청 받기 
//express 실행
const express = require('express')
const app = express()
//body-parser 사용
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log('server Start')
})

app.get('/',(req,res)=>{
    res.send('<form method = "POST">'+
    '<textarea name = "memo" value>테스트</textarea>'+
    '<br/><input type="submit" value="전송"/></form>')

})
app.post('/',(req,res)=>{
    //body-parser library
    const data = JSON.stringify(req.body)
    res.send('POST : '+data)
})