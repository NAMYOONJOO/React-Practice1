const express = require('express')
const app = express()

//multer 사용 준비 
//업로드를 처리하는 multer 모듈을 읽어들임
const multer = require('multer')
const path = require('path')

//multer 객체생성, 어디파일 업로드 할지 지정
//__dirname : 현재 실행중인 파일 경로

const tmpDir = path.join(__dirname,'tmp')
const pubDir = path.join(__dirname,'pub')

const uploader = multer({dest:tmpDir})

app.listen(3000,(req,res)=>{
    console.log('server start')
})

app.get('/',(req,res)=>{
    //파일 업로드 양식
    res.send(
        '<form method="POST" action"/" enctype="multipart/form-data">'+
        '<input type = "file" name = "aFile"/><br/>'+
        '<input type = "submit" value = "업로드"/>'+
        '</form>' )
})

//정적파일 사용
//정적파일을 자동적으로 응답하도록 설정
app.use('/pub',express.static(pubDir))

/**
 * express.static 사용시 특정디렉터리 내부의 파일을 모두 서버에 공개할 수 있습니다.
 */
app.use('/',express.static('./'))
/*
미들웨어 upload.single('avatar')는 뒤의 function(req, res)함수가 실행되기 전에 먼저 실행.
미들웨어는 사용자가 전송한 데이터 중에서 만약 파일이 포함되어 있다면,
그 파일을 가공해서 req객체에 file 이라는 프로퍼티를 암시적으로 추가도록 약속되어 있는 함수.
*/
//두번재 매개변수는 multer 객체
app.post('/', uploader.single('aFile'),(req,res)=>{
    console.log('파일을 받았습니다.')
    console.log('원본파일 이름',req.file.originalname)
    console.log('저장된 경로',req.file.path)

    if(req.file.mimetype!=='image/png'){
        res.send('PNG 이미지만 업로드할 수 있습니다.')
        return
    }

    //임시 디렉터리에 있는 파일을 공개 디렉터리로 이동 
    const fname = req.file.filename+'.png'
    const des = pubDir+'/'+fname
    const fs = require('fs')
    fs.rename(req.file.path, des,()=>{
        
        res.send('다음과 같은 파일이 업로드 되었습니다.<br/>'
        +`<img src="/pub/${fname}"/>`)
    })

    
} )