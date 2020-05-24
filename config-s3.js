var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
require('dotenv').config()

var s3 = new aws.S3({ 
  accessKeyId: process.env.ACCESSKEY,
  secretAccessKey: process.env.SECRETKEY
 }) 
module.exports=  multer({
  storage: multerS3({
    s3: s3,
    bucket: 'awsnodejsmulter/uploads',
    acl: 'public-read', //comment this line if you not enable access object 
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now() + '.' + (file.originalname))
    },
  })
})
