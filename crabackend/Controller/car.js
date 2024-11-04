const multer = require('multer')
const upload = multer({dest:'images/cars/'})

exports.add = function(req, res){
    if(req.file){
        res.send(req.file)
    }
}