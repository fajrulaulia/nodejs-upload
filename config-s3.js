var multer = require('multer')
var multerS3 = require('multer-s3')
var s3 = new aws.S3({ /* ... */ })
 
module.exports= multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
 
