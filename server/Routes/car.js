const express = require('express')
const router = express.Router()
const multer = require('multer')
const car = require('../Controller/car')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/cars'); 
    },
    filename: (req, file, cb) => {

        cb(null, file.fieldname + '-' + file.originalname); 
    }
});
const upload = multer({storage:storage})

router.post('/add', upload.single('car'), car.add)
router.get('/edit', )
router.put('/update', )
router.delete('/delete', )

module.exports = router