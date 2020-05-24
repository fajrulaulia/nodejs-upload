const app = require('express')()
const bodyParser = require('body-parser')
const upload = require('./config-local')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/upload', upload.single('filee'), function (req, res) {
    console.log(req.file)
    res.status(200).json({data:req.file,success:true})
    res.end()
})

app.listen(8999, () => console.log("Server listening at Port", 8999))