const app = require('express')()
const bodyParser = require('body-parser')
// const upload = require('./config-local')
const upload = require('./config-s3')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/upload', upload.single('fileUpload'), (req, res)=> {
    console.log(req.file)
    return res.status(200).json({data:req.file,success:true})
})

app.listen(8999, () => console.log("Server listening at Port", 8999))